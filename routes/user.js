const express = require('express');
const User = require('../service/user');
const app = express();
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const data = await User.get();
        res.json(data);
    } catch (error) {
        res.json({ error: error })
    }
}).get('/:id', async (req, res) => {
    try {
        const data = await User.get(req.params.id);
        res.json(data);
    } catch (error) {
        res.json({ error: error })
    }
});

router.post('/', async (req, res) => {
    try {
        // const newuser = new User({
        //     name: req.body.name || '',
        //     gender: req.body.gender || ''
        // })
        // const data = await newuser.save();
        const data = await User.add(req.body)
        res.json(data);
    } catch (error) {
        res.json({ error: error })
    }
}).put('/:id', async (req, res) => {
    try {
        const updateduser = await User.update(req.params.id, req.body)
        res.json(updateduser);
    } catch (error) {
        console.error(error);
        res.json({ error: error })
    }
}).delete('/:id', async (req, res) => {
    try {
        const updateduser = await User.delete(req.params.id)
        res.json(updateduser);
    } catch (error) {
        console.error(error);
        res.json({ error: error })
    }
})


module.exports = router;