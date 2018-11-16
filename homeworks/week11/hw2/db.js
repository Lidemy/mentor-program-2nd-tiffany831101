// 引入mysql模塊，這邊代表的不是安裝mysql資料庫，而是建立與他的連結的包而已
var mysql = require("mysql2");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hw3",
    // 是否可以包含sql multiple statements
    multipleStatements: true
});

conn.connect(function (err) {
    if (err) {
        console.log('連線失敗');
        console.log(err)
        return;
    }
    console.log('連線成功');
});

module.exports = {
    conn: conn,
    urlTable: "url",
}

// console.log(conn);
// conn本身就是執行完物件裡的connect方法後回傳的結果，所以其他再引入的時候不用再寫connect()