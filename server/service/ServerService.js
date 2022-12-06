'use strict';

const servers= [ {
  "server-name" : "Minecraft-server",
  "serverSpecs" : "MID-TIER",
  "fileLocation" : "https://www.example.com/",
  "whitelist" : {
    "users" : [100, 200, 300]
  },
  "ownerId" : 100,
  "serverId" : 100,
  "status" : "RUNNING"
}, {
  "server-name" : "Ark-server",
  "serverSpecs" : "HIGH-TIER",
  "fileLocation" : "https://www.example.com/",
  "whitelist" : {
    "users" : [100, 200]
  },
  "ownerId" : 100,
  "serverId" : 200,
  "status" : "RUNNING"
}, {
  "server-name" : "Outward-server",
  "serverSpecs" : "MID-TIER",
  "fileLocation" : "https://www.example.com/",
  "whitelist" : {
    "users" : [200]
  },
  "ownerId" : 200,
  "serverId" : 300,
  "status" : "RUNNING"
} ];

/**
 * Returns all the servers that are created.
 * Returns all the servers that are created.
 *
 * returns List
 **/
exports.serversGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    
    if (servers && servers.length > 0) {
      examples['application/json'] = servers;
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'Something went wrong.';
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Create and inserts a new server in the cloud database.
 * Create and inserts a new server in the cloud database.
 *
 * body Server 
 * returns String
 **/
exports.serversPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (body) {
      examples['text/plain'] = "Server created successfully.";

      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'Invalid parameters.';
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Delete a server given its ID.
 * Delete a server given its ID.
 *
 * serverId Long Identifier of a server.
 * returns String
 **/
exports.serversServerIdDELETE = function(serverId) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    if (servers.some(server => server.serverId === serverId)) {
      examples['text/plain'] = "Server deleted.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Server not found.";
      reject(examples[Object.keys(examples)[0]]);    
    }
  });
}


/**
 * Returns a server specified by its ID.
 * Returns a server specified by its ID.
 *
 * serverId Integer Identifier of a server
 * returns Server
 **/
exports.serversServerIdGET = function(serverId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    const server = servers.find(server => server.serverId === serverId);
    if (server) {
      examples['application/json'] = server;
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Server not found.";
      reject(examples[Object.keys(examples)[0]]);    
    }
  });
}


/**
 * Update characteristic of the server specified by its identifier.
 * Update characteristic of the server specified by its identifier.
 *
 * body Server 
 * serverId Long Identifier of a server
 * returns String
 **/
exports.serversServerIdPUT = function(body,serverId) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    if (servers.some(server => server.serverId === serverId)) {
      examples['text/plain'] = "Server modified successfully.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Server not found.";
      reject(examples[Object.keys(examples)[0]]);    
    }
  });
}


/**
 * Starts up the server specified by its identifier.
 * Starts up the server specified by its identifier.
 *
 * serverId Long Identifier of a server.
 * returns String
 **/
exports.serversServerIdStartPUT = function(serverId) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    if (servers.some(server => server.serverId === serverId)) {
      examples['text/plain'] = "Server started up successfully.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Server not found.";
      reject(examples[Object.keys(examples)[0]]);    
    }
  });
}


/**
 * Stops a running server server.
 * Stops a running server server.
 *
 * serverId Long Identifier of a server.
 * returns String
 **/
exports.serversServerIdStopPUT = function(serverId) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    if (servers.some(server => server.serverId === serverId)) {
      examples['text/plain'] = "Server stopped successfully.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Server not found.";
      reject(examples[Object.keys(examples)[0]]);    
    }
  });
}

