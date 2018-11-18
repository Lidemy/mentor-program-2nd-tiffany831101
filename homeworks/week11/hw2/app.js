const express = require("express");
const app = express();
const conn = require('./db').conn;
const urlTable = require('./db').urlTable;
const mysql = require("mysql2");
const bodyParser = require('body-parser');
const crypto = require('crypto');
app.use(express.static('./public'));
// 測試可否使用
// console.log(crypto.randomBytes(5).toString("hex"))
// 可以不用寫副檔名(view)下面的
app.set('views', './views');

// 設定模板引擎為ejs
app.set('view engine', 'ejs');

// 設定body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.render('index');
});

app.post("/url", (req, res) => {
    // 取得要輸入的網址
    var originalUrl = req.body.url;
    // console.log(originalUrl);
    // 產生短網址，送進資料庫裏面
    var short = crypto.randomBytes(5).toString("hex");
    var shortUrl = "http://localhost:3000/u/" + short;
    conn.query({
        sql: 'SELECT original , short FROM ?? WHERE original=?',
        values: [urlTable, originalUrl]
        // 就執行後面的cb
    }, (error, results) => {
        // 如果錯誤就報錯
        if (error) throw error;
        //如果找不到相同的資料，代表跟資料庫吻合的0筆
        if (results.length === 0) {
            // 執行下面的query，把資料insert db裏面
            conn.query({
                sql: 'INSERT INTO ?? (original, short) VALUES (?, ?)',
                values: [urlTable, originalUrl, shortUrl]

            }, (error, results) => {
                if (error) throw error;

                // req.session.user_id = results.insertId;
                // req.session.nickname = req.body.nickname;
                res.send(shortUrl);
                // res.send(shortUrl);

                res.locals.link = shortUrl;
            });
        } else if (results.length === 1) {
            // 剛好之前已經輸入過相同的網址
            conn.query({
                sql: 'SELECT short FROM ?? WHERE original=?',
                values: [urlTable, originalUrl]

            }, (error, results) => {
                if (error) throw error;
                // 避免相同的長網址有兩個短網址
                res.send(results[0].short);
            });

        } else {
            // 錯誤
            res.send('error');
        };
    });

})

app.get("/u/:id", (req, res) => {
    // 取得後面id的參數
    // console.log(req.params.id);
    // 在資料庫中找出這筆短網址對應的長網址，倒回長網址去
    var shortUrl = "http://localhost:3000/u/" + req.params.id;
    // console.log(shortUrl);
    conn.query({
        sql: 'SELECT original FROM ?? WHERE short=?',
        values: [urlTable, shortUrl]
    }, (error, results) => {
        if (error) throw error;
        // console.log(results[0].original);
        res.redirect(results[0].original);
    });
})

app.listen(3000, () => console.log('Server is listening Port 3000 '));