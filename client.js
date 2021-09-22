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
  })
  
  
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