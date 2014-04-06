exports.register = function (plugin, options, next) {
    plugin.select('public').route([
        {
            method: 'GET',
            path: '/',
            config: {
                handler: function(response, reply) {
                    reply('Hello World');
                }
            }
        }
    ]);
    return next();
}