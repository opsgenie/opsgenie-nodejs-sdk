"use strict";

var api = require('./../restApi');

/**
 * Alert API v2. For more information: https://www.opsgenie.com/docs/rest-api/alert-api
 * To see mandatory and optional parameter checkout the alert api web page
 *
 * Also, you can check samples under /samples/alertV2 for examples.
 *
 * @return {Object} order functions
 */
function alertV2() {
    var baseURL = '/v2/alerts/';
    var savedSearchbaseURL = baseURL + "saved-searches/";
    var closeActionPath = "/close/";
    var acknowledgeActionPath = "/acknowledge/";
    var unAcknowledgeActionPath = "/unacknowledge/";
    var addNoteActionPath = "/notes/";
    var snoozeActionPath = "/snooze/";
    var escalateToNextActionPath = "/escalate/";
    var assignActionPath = "/assign/";
    var addTeamActionPath = "/teams/";
    var tagsActionPath = "/tags/";
    var detailsActionPath = "/details/";
    var customActionPath = "/actions/";
    var recipientsPath = "/recipients/";
    var listLogsPath = "/logs/";
    var listNotesPath = "/notes/";

    return {
        /*
         * This request is to get alerts that are created in Opsgenie.
         * One of id, tinyId or alias parameters should be specified with get alert request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         * */
        get: function (identifier, config, cb) {
            var path = api.getPath(baseURL, identifier, null);
            api.get(path, config, cb)
        },

        /*
         * This request is to create alerts in Opsgenie.
         * Please check new alert api documentation for available fields here:
         * https://www.opsgenie.com/docs/rest-api/alert-api#createAlert
         *
         * Also, you can check /samples/alertV2/create.js for a complete example.
         *
         * */
        create: function (data, config, cb) {
            api.post(baseURL, data, config, cb)
        },

        /*
         * This request is to delete an alert in Opsgenie.
         * One of id, tinyId or alias parameters should be specified with delete alert request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         * */
        delete: function (identifier, config, cb) {
            var path = api.getPath(baseURL, identifier, null);
            api.delete(path, config, cb)
        },

        /*
        * Most of the requests are now async in new alert api, thus many responses only return requestId.
        * You can use this request to investigate the result of your request using requestId you have earlier.
        *
        * You can check /samples/alertV2/getRequestStatus.js as an example.
        * */
        getRequestStatus: function (requestId, config, cb) {
            var path = baseURL + "requests/" + requestId;
            api.get(path, config, cb)
        },

        /*
        * This request is to list alerts in Opsgenie, using different filters.
        * For this filters and query options, you can check list alert document here :
        * https://www.opsgenie.com/docs/rest-api/alert-api#listAlerts
        *
        * Also, you can check /samples/alertV2/list.js for a compete example.
        * */
        list: function (params, config, cb) {
            var path = api.getPathWithListParams(baseURL, params);
            api.get(path, config, cb)
        },

        /**
         * This request is to acknowledge an alert in opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with acknowledge alert request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         */
        acknowledge: function (identifier, data, config, cb) {
            var path = api.getPath(baseURL, identifier, acknowledgeActionPath);
            api.post(path, data, config, cb);
        },
        /**
         * This request is to close an alert in Opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with close alert request.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         */
        close: function (identifier, data, config, cb) {
            var path = api.getPath(baseURL, identifier, closeActionPath);
            api.post(path, data, config, cb);
        },
        /**
         * This request is to add a note to an alert in Opsgenie.
         *
         * Add note request is used to add notes to alerts in OpsGenie
         * One of id, tinyId or alias parameters should be specified with add note request.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, note param is mandatory as "note": "custom note" in request data
         */
        addNote: function (identifier, data, config, cb) {
            var path = api.getPath(baseURL, identifier, addNoteActionPath);
            api.post(path, data, config, cb);
        },
        /**
         * This request is to unacknowledge an alert in Opsgenie that were already acknowledged by someone.
         *
         * One of id, tinyId or alias parameters should be specified with unacknowledge alert request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         */
        unacknowledge: function (identifier, data, config, cb) {
            var path = api.getPath(baseURL, identifier, unAcknowledgeActionPath);
            api.post(path, data, config, cb);
        },
        /**
         * This request is to snooze an alert in Opsgenie until a given date.
         *
         * One of id, tinyId or alias parameters should be specified with snooze alert request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, endTime param is mandatory for this request. endTime param should be in ISO 8061 format.
         * You can check /samples/alertV2/snooze.js as an example.
         */
        snooze: function (identifier, data, config, cb) {
            var path = api.getPath(baseURL, identifier, snoozeActionPath);
            api.post(path, data, config, cb);
        },
        /**
         * One of id, tinyId or alias parameters should be specified with escalate to next request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, escalation param is mandatory for this request. escalation param should take an object that specifies escalation id or name.
         * Example escalation params:
         * escalation : { id : "escalationId" }
         * escalation : { name : "escalationName" }
         */
        escalateToNext: function (identifier, data, config, cb) {
            var path = api.getPath(baseURL, identifier, escalateToNextActionPath);
            api.post(path, data, config, cb);
        },
        /**
         * This request is to assign someone to an alert in Opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with assign alert request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, owner param is mandatory for this request. owner param should take an object that specifies user id or username.
         * Example owner params:
         * owner : { id : "userId" }
         * owner : { username : "user@opsgenie.com" }
         */
        assign: function (identifier, data, config, cb) {
            var path = api.getPath(baseURL, identifier, assignActionPath);
            api.post(path, data, config, cb);
        },
        /**
         * This request is to add a team to an alert in Opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with add team request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, team param is mandatory for this request. team param should take an object that specifies team id or name.
         * Example team params:
         * team : { id : "teamId" }
         * team : { name : "teamName" }
         */
        addTeam: function (identifier, data, config, cb) {
            var path = api.getPath(baseURL, identifier, addTeamActionPath);
            api.post(path, data, config, cb);
        },
        /**
         * This request is to add tags to an alert in Opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with add tags request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, tags param is mandatory for this request. tags param should take a list of tags.
         * Example tags params:
         * tags : ["tag1", "tag2"]
         */
        addTags: function (identifier, data, config, cb) {
            var path = api.getPath(baseURL, identifier, tagsActionPath);
            api.post(path, data, config, cb);
        },
        /**
         * This request is to remove tags from an alert in Opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with remove tags request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, tags param is mandatory for this request.
         * Example tags params:
         * tags : "tag1,tag2"
         */
        removeTags: function (identifier, data, config, cb) {
            if (data.tags === undefined) {
                return new Error("tags param can not be empty.");
            }
            var path = api.getPathWithData(baseURL, identifier, tagsActionPath, data);
            api.delete(path, config, cb);
        },
        /**
         * This request is to add details as custom properties to an alert in Opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with add details request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, details param is mandatory for this request. This param should specify key-value pairs to be added as extra properties to the alert.
         * Example details params:
         * details : { key1 : "value1", key2 : "value2" }
         */
        addDetails: function (identifier, data, config, cb) {
            var path = api.getPath(baseURL, identifier, detailsActionPath);
            api.post(path, data, config, cb);
        },
        /**
         * This request is to remove details(custom properties) using their keys from an alert in Opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with remove details request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, details param is mandatory for this request. This param should provide keys to remove as a comma separated string.
         * Example details params:
         * details : "key1, key2"
         */
        removeDetails: function (identifier, data, config, cb) {
            if (data.keys === undefined) {
                return new Error("details param can not be empty.");
            }
            var path = api.getPathWithData(baseURL, identifier, detailsActionPath, data);
            api.delete(path, config, cb);
        },
        /**
         * This request is to execute a custom action on an alert in Opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with execute custom action request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, action param is mandatory for this request. This param should specify the name of the custom action.
         * Example action param:
         * action : "actionName"
         */
        executeAction: function (identifier, data, config, cb) {
            if (data.action === undefined) {
                return new Error("action param can not be empty.");
            }

            var path = api.getPath(baseURL, identifier, customActionPath + data.action);
            api.post(path, data, config, cb);
        },
        /**
         * This request is to list recipients of an alert in Opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with list alert recipients request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         */
        listAlertRecipients: function (identifier, config, cb) {
            var path = api.getPath(baseURL, identifier, recipientsPath);
            api.get(path, config, cb);
        },
        /**
         * This request is to list logs of an alert in Opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with list alert logs request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, extra query parameters can be provided to customize the result of this request. See docs for further details:
         * https://www.opsgenie.com/docs/rest-api/alert-api#listAlertLogs
         *
         * You can also check /samples/alertV2/listLogs.js for an example.
         */
        listAlertLogs: function (identifier, data, config, cb) {
            var path = api.getPathWithData(baseURL, identifier, listLogsPath, data);
            api.get(path, config, cb);
        },
        /**
         * This request is to list notes of an alert in Opsgenie.
         *
         * One of id, tinyId or alias parameters should be specified with list alert notes request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * Also, extra query parameters can be provided to customize the result of this request. See docs for further details:
         * https://www.opsgenie.com/docs/rest-api/alert-api#listAlertNotes
         *
         * You can also check /samples/alertV2/listNotes.js for an example.
         */
        listAlertNotes: function (identifier, data, config, cb) {
            var path = api.getPathWithData(baseURL, identifier, listNotesPath, data);
            api.get(path, config, cb);
        },
        /**
         * This request is to get a savedSearch that was created before for searching alerts in Opsgenie .
         *
         * One of id or name parameters should be specified with get saved search request as identifier.
         * example identifier objects:
         * {identifier : "123", identifierType : "id"}
         * {identifier : "open_and_acked", identifierType : "name"}
         */
        getSavedSearch: function (identifier, config, cb) {
            var path = api.getPath(savedSearchbaseURL, identifier, null);
            api.get(path, config, cb)
        },
        /**
         * This request is to create a new save search for searching alerts in Opsgenie.
         *
         * Note that name, query and owner params are mandatory for this request.
         *
         * You can check /samples/alertV2/createSavedSearch.js for a complete example.
         */
        createSavedSearch: function (data, config, cb) {
            api.post(savedSearchbaseURL, data, config, cb)
        },
        /**
         * This request is to update a saved search for searching alerts in Opsgenie.
         */
        updateSavedSearch: function (identifier, data, config, cb) {
            var path = api.getPath(savedSearchbaseURL, identifier, null);
            api.patch(path, data, config, cb)
        },
        /*
         * This request is to get all saved searches for searching alerts in Opsgenie.
         */
        listSavedSearches: function (config, cb) {
            api.get(savedSearchbaseURL, config, cb)
        }

    };
}

module.exports = alertV2;
