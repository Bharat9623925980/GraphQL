const path = require('path'),
    fs = require('fs');

const staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.txt', '.json', '.xml'];

function isStatic(resourceName) {
    const resExtn = path.extname(resourceName);
    console.log(resExtn);
    return staticResExtns.indexOf(resExtn) >= 0;
}

module.exports = function(req, res){
    const resourceName = req.urlObj.pathname === '/' ? '/index.html' : req.urlObj.pathname;
    console.log(resourceName);
    if (isStatic(resourceName)) {
        console.log('inside true');
        const resourcePath = path.join(__dirname, resourceName);
        if (!fs.existsSync(resourcePath)) {
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(resourcePath).pipe(res);
        
    } else{
        console.log('not static');
    }
}