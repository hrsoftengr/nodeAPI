
const
    path = require ('path'),
    router = require('express').Router(),
    dir = `${path.dirname(__dirname)}/controllers`,
    helperLib = require(path.resolve('./config/lib/helper_lib'));

let ReadDir = new helperLib.read_directory.readDirectory() ;

let fileObj = ReadDir.requireFiles(dir);

router
.post('/TermAndCondition',fileObj['termctrl'].TermAndCondition)




module.exports = {
    router: router,
    base : '/api/admin'
}