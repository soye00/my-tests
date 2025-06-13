const express = require('express');
const supabase = require('../utils/supa.js');

const router = express.Router();

router.get('/checkout', async function (req, res, next) {
    console.log(req.query);
    const {data,err} = await supabase.from('ice_res').select().eq('res_no',req.query.res_no);

    data[0].tel = data[0].tel.replace(/-/g,'');

    res.render('pay/checkout',{title: '예약내역결제',reservation:data[0]});
})

// 결제성공 -> res_no 예약 번호 찾아서 결제완료 바꿔야함
router.get('/success', async function (req, res, next) {
    console.log(req.query);
    // [Object: null prototype] {
    //     paymentType: 'NORMAL',
    //         orderId: '64288621-5985-47f7-b2b4-b3d48562840f',
    //         paymentKey: 'tgen_20250613120606N3Z15',
    //         amount: '5000'
    // }
    // 결제완료
    await supabase.from('ice_res').update({status:"결제완료"}).eq('res_no',req.query.orderId);
    const {data} = await supabase.from('ice_res').select().eq('res_no',req.query.orderId);
    // console.log(data[0]);
    // res_no: '64288621-5985-47f7-b2b4-b3d48562840f',
    //     name: '최길동',
    //     tel: '010-9946-6266',
    //     email: 'dron512@naver.com',
    //     addr: '대구 달서구',
    //     date: '2025-06-20T00:00:00',
    //     time: '오전 10시 ~ 오후 1시',
    //     model: 'ㅅ삼성',
    //     capacity: '1',
    //     service: '청소',
    //     cycle: null,
    //     add: null,
    //     remark: 'ㅋㅋㅋㅋ',
    //     deposit: null,
    //     state: 1,
    //     created_at: '2025-06-13T10:54:03.586581',
    //     status: '결제완료',
    //     payment_amount: 10000,
    //     payment_date: null,
    //     payment_method: null,
    //     cancel_reason: null,
    //     cancel_date: null,
    //     clean_id: null,
    //     clean_date: null,
    //     clean_status: null,
    //     updated_at: '2025-06-13T10:54:03.586581',
    //     updated_by: null

    return res.render('pay/success', {reservation:data[0]});
})

module.exports = router;