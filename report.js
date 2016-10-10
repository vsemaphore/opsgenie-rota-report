"use strict";

const cli = require('cli');
const moment = require('moment');
const opsgenie = require('opsgenie-sdk');

cli.parse({
    apikey: ['a', 'API key', 'string'],
    from: ['f', 'FROM date', 'string'],
    to: ['t', 'TO date', 'string']
});

cli.main((args, options) => {
    if ( ! options.apikey) {
        return console.error('--apikey is required');
    }

    opsgenie.configure({
        'api_key': options.apikey
    });


    opsgenie.team.get({id: '2a30fd03-8bd0-4804-a06d-b6e73ea06632'}, function (error, alerts) {
        if (error) {
            console.error(error);
        } else {
            console.log("Result: ", alerts);
        }
    });

});

