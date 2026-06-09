require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const authRoutes = require('./routes/auth');
const certRoutes = require('./routes/certificates');


const app = express();
app.use(cors({
    origin: "*"
}));
app.use(express.json());
// serve uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api', authRoutes);
app.use('/api', certRoutes);


const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> {
    console.log('Mongo connected');
})
.catch(err => console.error('Mongo connection error', err));

app.listen(PORT, () => console.log('Server running on', PORT));

module.exports = app;