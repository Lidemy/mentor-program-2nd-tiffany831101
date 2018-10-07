資料庫名稱：comments

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  id      | integer  | 留言 id     |
| content  | text     | 留言內容  |
|parent_id | int      |繼承父留言的id，如果是父留言則為0
|username  |varchar   |用來存使用者的姓名
