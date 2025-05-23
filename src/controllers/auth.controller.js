import User from '../models/user.model.js';

const registerUser = async (req, res) => {
    let { firebaseUId, email, name } = req.body;

    try {
        let user = await User.findOne({ firebaseUId });

        if (user != null) {
            console.log("user found with name: ", user.name);
            return res.status(201).json({ message: "User already exists." });
        }

        user = new User({ firebaseUId, name, email });
        await user.save();

        return res.status(200).json(user);
    } catch (error) {
        console.error("Register User failed with error: ", error);
        return res.status(500).json({ message: "Internal Server Error." })
    }
};

export default registerUser;
