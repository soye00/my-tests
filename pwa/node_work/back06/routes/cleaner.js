const express = require('express');
const router = express.Router();
const supabase = require('../utils/supa.js');

router.get('/', async (req, res, next) => {
    const {data,error} = await supabase.from("ice_res").select().eq('status','결제완료');

    return res.render('cleaner/index', {title: 'Cleaner', reservation: data, user: req.session.user});
})

module.exports = router;