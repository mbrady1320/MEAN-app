var child_process = require('child_process');

console.log(1);

//child_process is needed to run this process async. Typically child_process
//requires a different command prompt. stdio : 'inherit' keeps the main and child in the same
//prompt.
var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
  stdio : 'inherit'
});

console.log(2);