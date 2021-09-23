const net = require("net");

let connection;

const handleUserInput = ((key) => { //callback function
console.log("key pressed: "+ key) //we can see in node what we are typing
  conn = connection // without this -> error undefined
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
   }
   if (key === 'w') {
     conn.write("Move: up");
   }
   if (key === 's') {
     conn.write("Move: down")
   }
   if (key === 'a') {
     conn.write("Move: left")
   }
   if (key === 'd') {
     conn.write("Move: right")
   }

})

const setupInput = (conn) => {
  connection = conn; //to accept an object that lets you interact with the server.
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", (key) => { 
    handleUserInput(key)}) //process.stdin.on('data', (key) => { //this code is from "Event Handling and User Input" exercise // process.stdout.write('.');
  stdin.resume();
  return stdin;
};





module.exports = {setupInput};