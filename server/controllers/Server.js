'use strict';

var utils = require('../utils/writer.js');
var Server = require('../service/ServerService');

module.exports.serversGET = function serversGET (req, res, next) {
  Server.serversGET()
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};

module.exports.serversPOST = function serversPOST (req, res, next, body) {
  Server.serversPOST(body)
    .then(function (response) {
      utils.writeJson(res, response, 201);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.serversServerIdDELETE = function serversServerIdDELETE (req, res, next, serverId) {
  Server.serversServerIdDELETE(serverId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.serversServerIdGET = function serversServerIdGET (req, res, next, serverId) {
  Server.serversServerIdGET(serverId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.serversServerIdPUT = function serversServerIdPUT (req, res, next, body, serverId) {
  Server.serversServerIdPUT(body, serverId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.serversServerIdStartPUT = function serversServerIdStartPUT (req, res, next, serverId) {
  Server.serversServerIdStartPUT(serverId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.serversServerIdStopPUT = function serversServerIdStopPUT (req, res, next, serverId) {
  Server.serversServerIdStopPUT(serverId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
