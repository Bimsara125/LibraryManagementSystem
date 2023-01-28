const express = require('express');
var router = express.Router();

var { Admin } = require('../Models/Admin');

//localhost:3000/admins

//Get All Admins API
router.get(`/`, async (req, res) => {
    const adminList = await Admin.find();

    if (!adminList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(adminList);
})

//Get Admin By Admin ID API
router.get('/:id', async (req, res) => {
    const admin = await Admin.findById(req.params.id);

    if (!admin) {
        res.status(500).json({ message: 'The Admin with the given ID was not found.' })
    }
    res.status(200).send(admin);
})

//Admin Create API
router.post('/', async (req, res) => {
    let admin = new Admin({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        NIC: req.body.NIC
    })
    admin = await admin.save();

    if (!admin)
        return res.status(400).send('the Admin cannot be created!')

    res.send(admin);
})

//Admin Update API
router.put('/:id', async (req, res) => {
    const admin = await Admin.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email
        },
        { new: true }
    )

    if (!admin)
        return res.status(400).send('the Admin cannot be Updated!')

    res.send(admin);
})

module.exports = router;