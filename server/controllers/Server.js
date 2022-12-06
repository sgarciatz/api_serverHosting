'use strict';

var utils = require('../utils/writer.js');
var Server = require('../service/ServerService');

module.exports.serversGET = function serversGET (req, res, next) {
  Server.serversGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversPOST = function serversPOST (req, res, next, body) {
  Server.serversPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversServerIdDELETE = function serversServerIdDELETE (req, res, next, serverId) {
  Server.serversServerIdDELETE(serverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversServerIdGET = function serversServerIdGET (req, res, next, serverId) {
  Server.serversServerIdGET(serverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversServerIdPUT = function serversServerIdPUT (req, res, next, body, serverId) {
  Server.serversServerIdPUT(body, serverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversServerIdStartPUT = function serversServerIdStartPUT (req, res, next, serverId) {
  Server.serversServerIdStartPUT(serverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversServerIdStopPUT = function serversServerIdStopPUT (req, res, next, serverId) {
  Server.serversServerIdStopPUT(serverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
