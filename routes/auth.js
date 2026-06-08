const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const secret = process.env.JWT_SECRET || 'supersecretjwtkey123!';


        // Database Check (Fallback)
        const admin = await Admin.findOne({ username });
        if (!admin) return res.status(401).json({ message: 'Invalid' });
        const ok = await bcrypt.compare(password, admin.passwordHash);
        if (!ok) return res.status(401).json({ message: 'Invalid' });
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '8h' });
        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router