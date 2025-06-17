const express = require('express');
const router = express.Router();
const supabase = require('../database/db');
const bcrypt = require('bcrypt');


router.post('/login', async (req, res, next) => {
    const {id, pw} = req.body;
    const {data, error} = await supabase.from('member').select()
        .eq('id', id);

    const sendData = {};

    if (data.length > 0) {// admin 계정 존재
        if (await bcrypt.compare(pw.trim(), data[0].pw)) {
            sendData.flag = 'success';
            sendData.message = '로그인하였습니다.'
            req.session.user = {id: data[0].id, addr: data[0].addr}
            res.json(sendData);
        } else {
            sendData.flag = 'error';
            sendData.message = '비밀번호가 틀렸습니다.'
            res.status(401).json(sendData);
        }
    } else {// admin 계정 존재 X
        sendData.flag = 'fail';
        sendData.message = '아이디와 비밀번호 확인하세요';
        res.status(401).json(sendData);
    }

    res.json(sendData);
})

router.get('/me', async (req, res, next) => {

    if(req.session.user) {
        res.json({status: true, user: req.session.user});
    }else{
        res.json({status: false});
    }

})

router.post('/logout', async (req, res, next) => {
    req.session.destroy(() =>{
        res.clearCookie('connect.sid');
        res.json({status: false});
    });
})

module.exports = router;
