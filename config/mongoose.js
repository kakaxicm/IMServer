var mongoose = require('mongoose'); //引入mongoose模块
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/chat', {useNewUrlParser:true});


// var db = mongoose.createConnection('mongodb://kakaxicm:123456@47.105.128.141:27017/chat?authSource=admin');
// ,{useMongoClient:true}
db.on('error', function(error) {
	// console.log('数据库连接失败：' + error);
    vfglobal.MyLog("sent:", "数据库连接失败"+error);
});
db.on('open', function() {
    vfglobal.MyLog("sent:", "——数据库连接成功！——"+new Date().toLocaleString());
	// console.log('——数据库连接成功！——' + new Date().toLocaleString());
});

module.exports = db;