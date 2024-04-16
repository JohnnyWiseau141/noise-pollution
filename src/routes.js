const fs = require('fs');

const pty = require('node-pty');


function safecall (f, ...args) {
  try {
    return [true, f(...args)];
  }
  catch (err) {
    console.error(err);
    return [false, err];
  }
}

function fileExistsSync (file) {
  try {
    fs.readFileSync(file);
  }
  catch {
    return false;
  }
  return true;
}


const libDir = './lib';

const chapters = fs.readdirSync(libDir).map(chapterDname => {
  if (!chapterDname.startsWith('ch')) return null;

  const chapter = {
    dname: chapterDname,
    dir: `${libDir}/${chapterDname}`,
    description: null,
    num: parseInt(chapterDname.substr(2), 10),
    programs: [],
  };

  let prevProgramNum = 0;
  chapter.programs = fs.readFileSync(`${chapter.dir}/INDEX.txt`, {encoding: 'utf-8'}).split('\n').map(line => {
    line = line.trim();
    if (!line) return null;
    if (line.startsWith('#')) {
      if (!chapter.description) {
        chapter.description = line.substr(1).trim();
      }
      return null;
    }

    const [name, status, shortDesc, longDesc] = line.split('|').map(s => s.trim());
    const program = {
      num: ++prevProgramNum,
      name,
      shortDesc,
      longDesc,
      status,
      johnny: {},
    };
    program.fname = program.name;
    program.file = `${chapter.dir}/${program.fname}`;
    program.exists = fileExistsSync(program.file);
    program.johnny.name = `${program.name.substr(0, program.name.length-3)}-johnny.js`;
    program.johnny.fname = program.johnny.name;
    program.johnny.file = `${chapter.dir}/${program.johnny.fname}`;
    program.johnny.exists = fileExistsSync(program.johnny.file);
    program.status = program.status || (program.johnny.exists ? 'Pending review' : 'New');
    return program;
  }).filter(Boolean);

  chapter.description = chapter.description || 'UNTITLED';

  return chapter;
}).filter(Boolean);


module.exports.setup = function (app) {

  app.get('/', async (req, res) => {
    res.render('index', {
      title: 'Chapters',
      chapters,
    });
  });


  app.get('/sbeve.js/download', async (req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename="sbeve.js"');
    res.sendFile(`${libDir}/sbeve.js`, {root: '.'});
  });


  app.get('/ch/:num/', async (req, res) => {
    const num = parseInt(req.params.num, 10);

    const chapter = chapters[num - 1];

    res.render('chapter', {
      title: `Chapter ${chapter.num}: ${chapter.description}`,
      chapter,
    });
  });

  app.get('/ch/:num/program/:name/', async (req, res) => {
    const num = parseInt(req.params.num, 10);
    const name = req.params.name;

    const {programs, ...chapter} = chapters[num - 1];
    const program = programs.find(program => program.name === name);

    res.render('program', {
      title: `Chapter ${chapter.num} // ${program.name}`,
      chapter,
      program,
    });
  });


  app.get('/ch/:num/program/:name/view', async (req, res) => {
    const num = parseInt(req.params.num, 10);
    const name = req.params.name;
    const isJohnny = Boolean(req.query.johnny);

    const {programs, ...chapter} = chapters[num - 1];
    const program = programs.find(program => program.name === name);
    const actual = isJohnny ? program.johnny : program;

    res.sendFile(actual.file, {root: '.'});
  });


  app.get('/ch/:num/program/:name/run', async (req, res) => {
    const num = parseInt(req.params.num, 10);
    const name = req.params.name;
    const isJohnny = Boolean(req.query.johnny);

    const {programs, ...chapter} = chapters[num - 1];
    const program = programs.find(program => program.name === name);
    const actual = isJohnny ? program.johnny : program;

    res.render('program-run', {
      title: `[RUN] Chapter ${chapter.num} // ${actual.name}`,
      chapter,
      program,
      isJohnny,
    });
  });


  function wrapCallback (done, f) {
    return function (...args) {
      const [success] = safecall(f, ...args);
      if (!success) {
        done();
      }
    };
  }

  app.ws('/ch/:num/program/:name/run', async (ws, req, next) => {
    const num = parseInt(req.params.num, 10);
    const name = req.params.name;
    const isJohnny = Boolean(req.query.johnny);

    const chapter = chapters[num - 1];
    const program = chapter.programs.find(program => program.name === name);
    const actual = isJohnny ? program.johnny : program;

    const term = pty.spawn('bash', ['-c', String.raw`trap '' INT; node ${actual.file}; printf '\x1b[7m%s\x1b[m\n' 'PROGRAM TERMINATED'`]);

    let isFinishing = false;
    function done () {
      if (isFinishing) return;
      isFinishing = true;
      safecall(() => term.kill('SIGKILL'));
      safecall(() => ws.terminate());
    }

    term.on('data', wrapCallback(done, data => {
      ws.send(data);
    }));
    ws.on('message', wrapCallback(done, packet => {
      const code = packet[0];
      const info = packet.substr(1);
      if (code === 'd') {
        const data = info;
        term.write(data);
      }
      else if (code === 'r') {
        const {cols, rows} = JSON.parse(info);
        term.resize(cols, rows);
      }
    }));

    term.on('exit', done);
    ws.on('close', done);
  });

};
