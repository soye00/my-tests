require("dotenv").config();
const webpush = require('web-push');

webpush.setVapidDetails(
        'mailto:aaa@naver.com',
        'BMmKoGrWCQP7pnUGgYREvgZt4wHVChew725lZWgIURqqPk5TS52xx3O22bgtEPOH1tCWGuOzSyI-VTppVG-RbhY',  
        'yHgg1j9u78ikLQQU9wwIXei5_V_NTxzsC0sCE926HVk'
)

// 미들웨어 : (req,res,next) =>{} 의 형태 
const cors = require("cors"); // 크롬브라우저 cors err 방지 
// const pool = require("./db");
const express = require("express"); 
const path = require("path"); 
const morgan = require("morgan"); 
const cookieParser = require("cookie-parser");

const mymid = require("./mymiddle"); 

const app = express();

app.use(morgan());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));


app.use(mymid);

app.get('/subscribe',(req,res,next)=> {
    console.log(req.body);
    res.send('구독 성공');
})


app.use((req,res,next)=>{
    console.log('무조건 실행');
    next();
})

app.get('/',(req,res,next)=>{
    console.log('/호출');
    res.send("클라이언트에게 보내기")
})

app.listen(8080,()=>{
    console.log("서버 8080 시작");
})
