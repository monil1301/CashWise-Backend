import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firebaseUId: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
});

export default mongoose.model('User', userSchema);
