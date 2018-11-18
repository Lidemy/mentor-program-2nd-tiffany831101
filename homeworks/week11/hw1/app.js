const express = require("express");
const app = express();
const conn = require('./db').conn;
const usersTable = require('./db').usersTable;
const cmmtsTable = require('./db').cmmtsTable;
const mysql = require("mysql");
const phpPassword = require("node-php-password");
const bodyParser = require('body-parser');
const session = require('express-session');
// console.log(res.locals);
// 要加這行才可以讀到public底下的東西，一開始css沒生效的原因!!!這行超級重要!!!
// 才能獨到靜態模板
app.use(express.static('./public'));

// 可以不用寫副檔名(view)下面的
app.set('views', './views');

// 設定模板引擎為ejs
app.set('view engine', 'ejs');

// 設定body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// 設定session
app.use(session({
    secret: 'confidential',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000
    }
}));

// 為了測試是否可以連到資料庫
// conn.query("SELECT * FROM users", (err, res, fields) => {
//     if (err) throw err
//     // 可以選擇要第幾筆資料的什麼東西
//     console.log(res[0].id);
// })


// 0. 測試index路由
app.get('/', (req, res) => {
    res.redirect('/pages/1');
})

app.get('/pages/:page', (req, res) => {

    var currentPage,
        totalPages,
        cmmtStartNum;

    //驗證用戶登入狀態
    if (typeof (req.session.user_id) !== undefined) {
        // console.log(req.session.user_id);
        res.locals.user = {
            user_id: req.session.user_id,
            nickname: req.session.nickname
        };
    } else {
        res.locals.user = {
            user_id: undefined,
            nickname: undefined,
        };
    }

    // 查詢主要留言筆數，用以計算頁數及每頁起始留言
    conn.query({
        sql: 'SELECT COUNT(parent_id) AS datanum FROM ' + cmmtsTable + ' WHERE parent_id = 0',
        // values: [cmmtsTable]
    }, (error, results, fields) => {

        if (error) throw error;

        // 總頁數計算
        totalPages = Math.ceil(results[0].datanum / 10);
        res.locals.totalPages = totalPages;

        if (parseInt(req.params.page) < 0 || parseInt(req.params.page) > totalPages || isNaN(parseInt(req.params.page))) {

            //如果頁碼不合法，跳回第一頁
            res.redirect('/pages/1');

        } else {

            currentPage = parseInt(req.params.page);
            res.locals.currentPage = currentPage;
            cmmtStartNum = (currentPage - 1) * 10;
        };

        //查詢目前頁面需要的十筆主要留言
        conn.query({
            sql: 'SELECT c.id AS cmmt_id, user_id, nickname, time, content FROM ' + cmmtsTable + ' AS c INNER JOIN ' + usersTable + ' AS u ' +
                'ON parent_id = 0 AND user_id = u.id ORDER BY time DESC LIMIT ' + cmmtStartNum + ', 10',
            // values: [cmmtsTable, usersTable, cmmtStartNum]
        }, (error, results) => {
            if (error) throw error;

            res.locals.cmmt = results;

            // console.log(res.locals)


            //串接查詢子留言的 multiple sql statement
            var sql = '';
            for (let i = 0; i < res.locals.cmmt.length; i++) {

                sql += 'SELECT c.id AS cmmt_id, user_id, nickname, time, content, parent_id FROM ' + cmmtsTable + ' AS c INNER JOIN ' + usersTable + ' AS u WHERE' +
                    ' parent_id = ' + res.locals.cmmt[i].cmmt_id + ' AND user_id = u.id ORDER BY time ASC;';
            }

            //查詢目前頁面的子留言
            conn.query({
                sql
            }, (error, results) => {
                if (error) throw error;

                //把子留言依序塞進所屬的主留言中
                for (let i = 0; i < res.locals.cmmt.length; i++) {
                    res.locals.cmmt[i].subCmmt = results[i];
                }

                res.render('index');
            });
        });
    });

});

app.post("/modify_cmmt", (req, res) => {
    var modifiedTime = timetrans();
    console.log(Number(req.body.cmmt_id));
    conn.query({
        sql: 'UPDATE ?? SET content = ?,time = ? WHERE id = ?',
        values: [cmmtsTable, req.body.content, modifiedTime, Number(req.body.cmmt_id)]
    }, (error, results) => {
        // console.log(results);
        if (error) {

            // throw error
            res.send("error")
        } else {
            // res.locals.time = modifiedTime;
            // console.log(res.locals);
            res.send(modifiedTime);
        };
    });
})

app.post("/delete", (req, res) => {
    console.log(Number(req.body.cmmt_id));
    conn.query({
        sql: 'DELETE FROM ?? WHERE id = ?',
        values: [cmmtsTable, Number(req.body.cmmt_id)]
    }, (error, results) => {
        if (error) {
            res.send("error")
        } else {
            res.send("deleted");
        };
    });


})

// 轉換時間戳的函示
function timetrans() {
    var date = new Date(); //如果date为13位不需要乘1000
    console.log(date);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s;
}

// 新增留言的處理
app.post("/insert_comm", (req, res) => {
    console.log(req.session.user_id);
    // console.log(req.body.content);
    var currentTime = timetrans();
    console.log(typeof (currentTime));
    // console.log(timetrans());
    var sql = 'INSERT INTO ?? ( user_id, parent_id, content,time ) VALUES (?, ?, ?, ?)';
    var inserts = [cmmtsTable, req.session.user_id, req.body.parent_id, req.body.content, currentTime];
    sql = mysql.format(sql, inserts);
    console.log(sql);

    conn.query({
        sql
    }, (error, results) => {

        if (error) throw error;

        //取得剛剛新增留言的 id ，並回查這筆留言的 created_by
        var cmmt_id = results.insertId;

        conn.query({
            sql: 'SELECT time FROM ' + cmmtsTable + ' AS c  WHERE c.id = ' + cmmt_id,
            // values: [cmmtsTable, cmmt_id]
        }, (error, results) => {
            if (error) throw error;

            //console.log(results)
            res.json({
                "nickname": req.session.nickname,
                "cmmt_id": cmmt_id,
                "time": results[0].time
            });

        });
    });

})





// 1. 測試login路由
app.get('/login', (req, res) => {
    // 刷新view 底下的login頁面，測試是否有
    res.render('login');
});

// 1. 寫login做的事情

app.post('/login', (req, res) => {
    conn.query({
        sql: 'SELECT id, username, password, nickname FROM ?? WHERE username = ?',
        values: [usersTable, req.body.username]

    }, (error, results) => {
        if (error) throw error;
        //有查詢到結果則比對密碼
        if (results.length !== 0) {
            // console.log(results);
            // 驗證results回傳回來的是一個json格式，所以需要選取第一筆results[0]
            if (phpPassword.verify(req.body.password, results[0].password)) {
                // 設定session id為    user的id
                req.session.user_id = results[0].id;
                // 設定session的nickname為 user的nickname
                req.session.nickname = results[0].nickname;
                res.send('ok');
                // 回傳ok給ajax發的request
            } else {
                // 
                res.send('pwderror');
            }

        } else {
            res.send('accerror');
        };
    });
});


// 修改留言




// 2. 寫reg路由
app.get('/reg', (req, res) => {
    // 刷新view 底下的login頁面，測試是否有
    res.render('reg');
});

// 2. 寫reg做的事情
// 

app.post('/reg', (req, res) => {
    console.log(req.body.nickname);
    //檢查帳號及暱稱是否已被人使用
    conn.query({
        sql: 'SELECT username , nickname FROM ?? WHERE username=? OR nickname=?',
        values: [usersTable, req.body.username, req.body.nickname]
        // 就執行後面的cb
    }, (error, results) => {
        // 如果錯誤就報錯
        if (error) throw error;

        //如果找不到相同的資料，代表跟資料庫吻合的0筆
        if (results.length === 0) {
            // 執行下面的query，把資料insert db裏面
            conn.query({
                sql: 'INSERT INTO ?? (username, password, nickname) VALUES (?, ?, ?)',
                values: [usersTable, req.body.username, phpPassword.hash(req.body.password), req.body.nickname]

            }, (error, results) => {
                if (error) throw error;

                req.session.user_id = results.insertId;
                req.session.nickname = req.body.nickname;
                res.send('ok');
            });
        } else {

            res.send('error');

        };
    });
});



// 開端口3000
app.listen(3000, () => console.log('Server is listening Port 3000 '));