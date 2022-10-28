const express = require('express');
const router =  express.Router();

const pool = require('../modules/pool');

router.post('/', (req,res)=>{
    let newFeedback = req.body;
    const sqlText = `
    INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
    VALUES
        ($1, $2, $3, $4);
    `
    const sqlParams = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comment]
    pool.query(sqlText,sqlParams)
        .then(dbRes => {
            console.log('sending feedback', dbRes);
            res.sendStatus(201);
        })
        .catch(err => {
            console.error('error in sending feedback', err);
            res.sendStatus(500);
        });
})


module.exports = router;