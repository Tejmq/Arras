const GLOBAL = require("./loaders/loader.js");
const { gameServer } = require("./game.js");
const config = require("./config.js");

// Only load the first server
const srv = config.servers[0];

// Start the server
new gameServer(
    srv.host,
    srv.port,
    srv.gamemode,
    srv.region,
    srv.properties, // webProperties
    srv.properties, // server properties
    srv.featured,
    null, // parentPort not needed for single-threaded
    GLOBAL
);
