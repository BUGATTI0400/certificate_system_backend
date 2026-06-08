// Simple script to create an admin user from CLI
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');


async function run(){
await mongoose.connect(process.env.MONGO_URI);
const username = process.argv[2];
const password = process.argv[3];
if(!username || !password){
console.log('Usage: node create-admin.js <username> <password>');
process.exit(1);
}
const hash = await bcrypt.hash(password, 10);
const admin = new Admin({ username, passwordHash: hash });
await admin.save();
console.log('Admin created:', username);
process.exit(0);
}
run().catch(err=>{console.error(err); process.exit(1)});