const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  }, () => {
    console.log('test')
  });
  
  conn.on('connect', () => {
    console.log('connected')
  })
  
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', () => {
    console.log('Hello')
  })
 

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {connect};