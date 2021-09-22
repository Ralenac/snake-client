const net = require("net");
const {connect} = require("./client.js")

connect;


// setup interface to handle user input from stdin

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
 


  


// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '135.23.223.133',
//     port: '50542'
//   }, () => {
//     console.log('test')
//   });
  
//   conn.on('connect', () => {
//     console.log('connected')
//   })
  
  
//   // interpret incoming data as text
//   conn.setEncoding("utf8");
//   conn.on('data', () => {
//     console.log('Hello')
//   })
 

//   return conn;
// };

// console.log("Connecting ...");
// connect();

