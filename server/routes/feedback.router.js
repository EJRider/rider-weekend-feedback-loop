const express = require('express');
const router =  express.Router();

const pool = require('../modules/pool');

router.post('/', (req,res)=>{
    let newFeedback = req.body;
    const sqlText = `
    INSERT INTO "
    `
})


module.exports = router;