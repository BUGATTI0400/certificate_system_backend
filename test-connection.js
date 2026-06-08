require('dotenv').config();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;

async function test() {
    console.log("--- Testing Connections ---");

    // 1. Test MongoDB
    console.log("1. Connecting to MongoDB...");
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB Connected Successfully!");
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err.message);
    }

    // 2. Test Cloudinary
    console.log("2. Connecting to Cloudinary...");
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        // Attempt a simple ping or usage of the API to verify credentials
        const result = await cloudinary.api.ping();
        console.log("✅ Cloudinary Connected Successfully!");
    } catch (err) {
        console.error("❌ Cloudinary Connection Failed:", err.message);
    }

    console.log("--- End of Test ---");
    process.exit();
}

test();
