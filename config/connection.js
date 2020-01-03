// sets the connection to mysql
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'w1b8x5necgrtroce',
        password: 'haydj4ontkiqd22c',
        database: 's567rusj9orfdias'
    });
};


// this makes the connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// exports connection for them orm to use
module.exports = connection;