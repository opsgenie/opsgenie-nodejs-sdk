"use strict";

var operations = require('../operations');
var api = require('../api');

function team() {
    var baseURL = '/v1/json/team/';
    var defaultOperations = ['create', 'update', 'get', 'list', 'delete', 'deleteById'];

    var ops = {
        baseURL: baseURL,
        /**
         * One of id or name parameters should be specified with add team member request
         * One of userId or username parameters should be specified with add team member request
         * teamId and userId -->
         *      {
         *          "id" : "ac463592-dbd2-4ca3-a651d-48fhf5j5c871",
         *          "userId" : "f670bd5f-1bt3-4d4d-9668-3bg0d320kef3"
         *      }
         */
        addMember: function (data, config, cb) {
            api.post(this.baseURL + 'member', data, config, cb);
        },
        /**
         * Remove team member request is used to remove a team member from a team in OpsGenie.
         * Params are same as addTeam member. TeamId or name and userId or name
         */
        removeMember: function (data, config, cb) {
            api.delete(this.baseURL + 'member', data, config, cb);
        },
        /**
         * List team logs request is used to retrieve team logs in OpsGenie
         * One of id or name parameters should be specified with list team logs request.
         */
        listLogs: function (data, config, cb) {
            api.get(this.baseURL + 'log', data, config, cb);
        }
    };
    ops = operations.attach(ops, defaultOperations);
    return ops;
}

module.exports = team;
