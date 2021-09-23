const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  }, () => {
    // console.log('test')
  });

  const name = 'ts'
  
  conn.on('connect', () => { 
    console.log("Successfully connected to game server" );
    conn.write(`Name: ${name}`) // how to send the information to the server
    conn.write('Say: fun')
    // setTimeout (() => {
    //   conn.write("Move: up");
    // }, 50)
    // setTimeout (() => {
    //   conn.write("Move: left");
    // }, 50)
  })

  //Supported Move Commands

//w -> "Move: up" - move up one square (unless facing down)
//s -> "Move: down" - move down one square (unless facing up)
//a -> "Move: left" - move left one square (unless facing right)
//d -> "Move: right" - move left one square (unless facing left)
  
  
  // interpret incoming data as text
  conn.setEncoding("utf8"); // get the information from the server
  conn.on('data', () => {
    console.log('Hello')
  })
 

  return conn;
};



module.exports = {connect};