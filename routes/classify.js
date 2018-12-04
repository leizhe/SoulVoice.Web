var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {
        title: '节目分类',
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
    res.render('classify', data);
});

module.exports = router;
