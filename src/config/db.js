import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Connect to mongo db
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connected successfuly");
    } catch (error) {
        console.log("Mongo connection failed: ", error);
        process.exit(1);
    }

    mongoose.connection.on('disconnected', () => {
        console.warn("Mongo disconnected");
    });

    mongoose.connection.on('error', (error) => {
        console.error("Mongo connection error: ", error);
    })
}

export default connectDB;
