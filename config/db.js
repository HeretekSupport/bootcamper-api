const mongoose = require('mongoose');

const connectDb = async () => {
    const conn = await mongoose.connect()
}