import express from "express";

const router = express.Router();

router.get('/usertest', (req, res) => {
    res.send('success');
});

router.post('/userposttest', (req, res) => {
    res.send(req.body);
})


export default router;