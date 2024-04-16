const fs = require('fs');
const child_process = require('child_process');


function die (msg) {
  console.error(msg);
  require('process').exit(1);
}

function input () {
  fs.writeSync(1, '\u001b[4m \b');
  let s = '';
  const b = Buffer.from([0]);
  while (true) {
    const len = fs.readSync(0, b);
    if (len === 0) {
      break;
    }
    const c = b.toString();
    if (c === '\n') {
      break;
    }
    s += c;
  }
  fs.writeSync(1, '\u001b[m');
  return s;
}

function inputNumber () {
  const f = parseFloat(input());
  if (isNaN(f)) {
    die("That's not a number ya punda!");
  }
  return f;
}

function print (...args) {
  if (args.length === 0) {
    die("Missing argument to print(), ya punda!")
  }
  else if (args.length > 1) {
    die("No commas, ya punda!")
  }

  console.log(args[0])
}

function sleep (delay) {
  child_process.spawnSync('sleep', [`${delay / 1000}`], {stdio: 'inherit'})
}

module.exports = {
  die,
  input,
  inputNumber,
  print,
  sleep,
};

Object.assign(global, module.exports);
