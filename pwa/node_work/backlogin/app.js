const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const cors = require('cors');

const port = process.env.PORT || 4003;
const app = express();

app.use(cors(
    {
    origin: 'http://localhost:5173',
    credentials: true
    }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',express.static('public'));
app.use(cookieParser());
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
    }
}));

app.use('/api', require('./routes/api'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})




