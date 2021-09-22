const net = require("net");
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", (key) => { 
    handleUserInput(key)}) //process.stdin.on('data', (key) => { //this code is from "Event Handling and User Input" exercise // process.stdout.write('.');
  stdin.resume();
  return stdin;
};

const handleUserInput = ((key) => { //callback function
   // \u0003 maps to ctrl+c input
   if (key === '\u0003') {
    process.exit();
    }
})

setupInput()

module.exports = {setupInput};