var config = require('./node_modules/ghost/core/server/config'),
    ghostVersion = require('./node_modules/ghost/core/server/utils/ghost-version');

require('./node_modules/ghost/core/server/overrides');


//since the config files are now json instead of js, this is the easiest
//way to set the config from environment variables.
config.set('database:connection:host', process.env.DATA_MYSQL_HOST);
config.set('database:connection:user', process.env.DATA_MYSQL_USER);
config.set('database:connection:password', process.env.DATA_MYSQL_PASS);

//these two environment variables need to be created on the dashboard,
//or via `nanobox add Name Value`
//this also assumes that you are using Mailgun as the provider
config.set('mail:options:auth:user', process.env.MANDRILL_API_USER);
config.set('mail:options:auth:pass', process.env.MANDRILL_API_KEY);


var ghost = require('ghost');
var path = require('path');

ghost().then(function (ghostServer) {
    ghostServer.start();
});
