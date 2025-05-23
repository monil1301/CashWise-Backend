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

const loginUser = async (req, res) => {
    const { firebaseUId, email } = req.body;

    try {
        if (!firebaseUId || !email) {
            return res.status(400).json({ message: "firebaseUId and email are required." });
        }

        const user = await User.findOne({ firebaseUId, email });

        if (!user) {
            console.log(`User not found with UID: ${firebaseUId}, email: ${email}`);
            return res.status(404).json({ message: "User does not exist." });
        }

        // Destructure after confirming user is found
        const { firebaseUId: uid, name, email: userEmail } = user;

        return res.status(200).json({ firebaseUId: uid, name, email: userEmail });
    } catch (error) {
        console.error("Login User failed with error: ", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}

const authController =  {
    registerUser,
    loginUser,
  };
  
export default authController;
