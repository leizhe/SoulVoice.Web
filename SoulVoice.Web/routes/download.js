var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {
        title: '下载App',
        time: (new Date).toString(),
        list: [
            {
                id: '1',
                name: '张三'
            },
            {
                id: '2',
                name: '李四'
            }]
    };
    res.render('download', data);
});

module.exports = router;
