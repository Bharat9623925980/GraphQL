const urlParser = require('url'),
querystring = require('querystring');

var dataParser = {
    parse(url){
        return urlParser.parse(url);
    }
}
module.exports = dataParser;