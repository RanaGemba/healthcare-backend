const mongoose = require("mongoose");
const Grid = require('gridfs-stream');

let gfs;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');

        const conn = mongoose.connection;
        gfs = Grid(conn.db, mongoose.mongo);
        gfs.collection('uploads'); // Set the collection to store files

    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = { connect, gfs };
