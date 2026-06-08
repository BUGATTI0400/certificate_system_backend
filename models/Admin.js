const mongoose = require('mongoose');


const AdminSchema = new mongoose.Schema({
username: { type: String, unique: true },
passwordHash: String
});


module.exports = mongoose.model('Admin', AdminSchema);