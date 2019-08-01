const fs = require('fs');
const yaml = require('js-yaml');


module.exports = function override(config, env) {
    var ext = config.externals || {}
    config.externals = Object.assign(ext, {
        api: JSON.stringify(yaml.safeLoad(
            fs.readFileSync('api/v1/api.yaml')), 'utf8')
    })
    return config;
}
