const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const db = require('./models');
const morgan = require('morgan');
const passport = require('passport');
const passportConfig = require('./passport');
const hpp = require('hpp');
const helmet = require('helmet');
const postRouter = require('./routes/post');
const loginRouter = require('./routes/login');

dotenv.config();
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);

passportConfig();

if(process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet());
  app.use(cors({
    origin: 'https://bogeun.dev',
    credentials: true,
  }));
} else {
  app.use(morgan('dev'));
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: true,
    domain: process.env.NODE_ENV === 'production' && '.bogeun.dev'
  }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/login', loginRouter);
app.use('/post', postRouter);

app.listen(3065, () => {
    console.log('서버 실핼 중');
});