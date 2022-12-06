'use strict';

var utils = require('../utils/writer.js');
var Whitelist = require('../service/WhitelistService');

module.exports.serversServerIdWhitelistDELETE = function serversServerIdWhitelistDELETE (req, res, next, serverId) {
  Whitelist.serversServerIdWhitelistDELETE(serverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversServerIdWhitelistGET = function serversServerIdWhitelistGET (req, res, next, serverId) {
  Whitelist.serversServerIdWhitelistGET(serverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversServerIdWhitelistPUT = function serversServerIdWhitelistPUT (req, res, next, body, serverId) {
  Whitelist.serversServerIdWhitelistPUT(body, serverId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
