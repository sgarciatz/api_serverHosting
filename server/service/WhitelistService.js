'use strict';

const users = [ {
  "firstName" : "Juan",
  "lastName" : "Díaz",
  "password" : "password1234",
  "servers" : [ 100, 200 ],
  "phone" : "123456789",
  "userId" : 100,
  "subscriptionTier" : "HIGH-END Hardware",
  "email" : "juanito.diaz@email.com",
  "friends" : [ 200, 300 ],
  "username" : "Juanito_2000",
  "videogames" : [ 100, 200, 300 ]
}, {
  "firstName" : "Paco",
  "lastName" : "Hernández",
  "password" : "password1234",
  "servers" : [ 300 ],
  "phone" : "657098334",
  "userId" : 200,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "paco.hernandez@email.com",
  "friends" : [ 100 ],
  "username" : "pakito_123",
  "videogames" : [ 100, 300 ]
}, {
  "firstName" : "Daniel",
  "lastName" : "Cambero",
  "password" : "password1234",
  "servers" : [ ],
  "phone" : "452670534",
  "userId" : 300,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "daniel.cambero@email.com",
  "friends" : [ 100 ],
  "username" : "dani_crk",
  "videogames" : [ 100 ]
} ];

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
 * Empties the server's whitelist.
 * Empties the server's whitelist.
 *
 * serverId Integer Identifier of a server.
 * returns String
 **/
exports.serversServerIdWhitelistDELETE = function(serverId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (servers.some(server => server.serverId === serverId)) {
      examples['text/plain'] = "Server's whitelist emptied.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Server not found.";
      reject(examples[Object.keys(examples)[0]]);    
    }
  });
}


/**
 * Retrieves the whitelist of the server given its ID.
 * Retrieves the whitelist of the server given its ID.
 *
 * serverId Integer Identifier of a server.
 * returns Whitelist
 **/
exports.serversServerIdWhitelistGET = function(serverId) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    const server = servers.find(server => server.serverId === serverId);
    if (server) {
      examples['application/json'] = users.filter(user => server.whitelist.users.some(whiteUser => whiteUser === user.userId));
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Server not found.";
      reject(examples[Object.keys(examples)[0]]);    
    }
  });
}


/**
 * Modify the server's whitelist (add users or remove users).
 * Modify the server's whitelist (add users or remove users).
 *
 * body Whitelist  (optional)
 * serverId Integer Identifier of a server.
 * returns String
 **/
exports.serversServerIdWhitelistPUT = function(body,serverId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (servers.some(server => server.serverId === serverId)) {
      examples['text/plain'] = "Server's whitelist modified.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Server not found.";
      reject(examples[Object.keys(examples)[0]]);    
    }
  });
}

