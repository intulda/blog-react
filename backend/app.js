const express = require('express');
const app = express();
const db = require('./models');
const postRouter = require('./routes/post');
const loginRouter = require('./routes/login');

db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/login', loginRouter);
app.use('/post', postRouter);

app.listen(3065, () => {
    console.log('서버 실핼 중');
});