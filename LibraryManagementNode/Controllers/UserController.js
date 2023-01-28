const express = require('express');
var router = express.Router();

var { Users } = require("../Models/User");

//Get All Users API
router.get(`/`, async (req, res) => {
    const userList = await Users.find();

    if (!userList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(userList);
})

router.post('/', async (req, res) => {
    let users = new Users({
        fullname: req.body.fullname,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password

    })
    users = await users.save();

    if (!users)
        return res.status(400).send('the User cannot be created!')

    res.send(users);
})

//localhost:3000/users

module.exports = router;