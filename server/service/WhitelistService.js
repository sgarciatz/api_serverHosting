'use strict';


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
    examples['application/json'] = "Server's whitelist emptied.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    examples['application/json'] = {
  "users" : [ 100, 200, 300 ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    examples['application/json'] = "Server's whitelist modified.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

