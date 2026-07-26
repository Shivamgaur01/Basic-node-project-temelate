const express = require('express');

const router = express.Router()

router.get('/info', (req, res)=>{
    res.json({msg: "I am from v2 routes"})
})

module.exports = router;
