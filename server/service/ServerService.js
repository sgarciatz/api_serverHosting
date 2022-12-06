'use strict';


/**
 * Returns all the servers that are created.
 * Returns all the servers that are created.
 *
 * returns List
 **/
exports.serversGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "server-name" : "Minecraft-server",
  "serverSpecs" : "MID-TIER",
  "fileLocation" : "https://www.example.com/",
  "whitelist" : [ {
    "users" : [ 100, 200, 300 ]
  }, {
    "users" : [ 100, 200, 300 ]
  } ],
  "ownerId" : 100,
  "serverId" : 100,
  "status" : "RUNNING"
}, {
  "server-name" : "Minecraft-server",
  "serverSpecs" : "MID-TIER",
  "fileLocation" : "https://www.example.com/",
  "whitelist" : [ {
    "users" : [ 100, 200, 300 ]
  }, {
    "users" : [ 100, 200, 300 ]
  } ],
  "ownerId" : 100,
  "serverId" : 100,
  "status" : "RUNNING"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    examples['application/json'] = "Server created successfully.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    examples['application/json'] = "Server deleted.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    examples['application/json'] = {
  "server-name" : "Minecraft-server",
  "serverSpecs" : "MID-TIER",
  "fileLocation" : "https://www.example.com/",
  "whitelist" : [ {
    "users" : [ 100, 200, 300 ]
  }, {
    "users" : [ 100, 200, 300 ]
  } ],
  "ownerId" : 100,
  "serverId" : 100,
  "status" : "RUNNING"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    examples['application/json'] = "Server modified successfully.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    examples['application/json'] = "Server started up successfully.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    examples['application/json'] = "Server stopped successfully.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

