const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  }, () => {
    // console.log('test')
  });

  const name = 'ts'
  
  conn.on('connect', () => { 
    console.log("Successfully connected to game server" );
    conn.write(`Name: ${name}`) // how to send the information to the server
    // setTimeout (() => {
    //   conn.write("Move: up");
    // }, 50)
    // setTimeout (() => {
    //   conn.write("Move: left");
    // }, 50)
  })

  //Supported Move Commands

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
  
  
  // interpret incoming data as text
  conn.setEncoding("utf8"); // get the information from the server
  conn.on('data', () => {
    console.log('Hello')
  })
 

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {connect};