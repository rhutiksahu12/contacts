import express from "express";
import bodyParser from 'body-parser'

const router = express.Router();

router.get('/POST/createContact', (req, res)=>{
    res.send('hello from contact')
})

export default router;