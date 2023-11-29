const { User } = require("./../models/userModel");
const bcrypt = require('bcrypt');

const sanitize = (data) => {
    //sanitization logic future
    return data;
};

const Registration = async (req, res) => {
    try {
        const { username, password, fullname } = sanitize(req.body);

        if (typeof username !== 'string' || typeof password !== 'string' || typeof fullname !== 'string') {
            return res.status(400).json({ message: "Invalid data type for required fields" });
        }

        if (!username.trim() || !password.trim() || !fullname.trim()) {
            return res.status(400).json({ message: "Please provide valid values for all required fields" });
        }

        const isUserExist = await User.findOne({ username });

        if (isUserExist) {
            return res.status(409).json({ message: "Username already exists" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            username,
            fullname,
            password: hashedPassword,
        });

        const newRegisteredUser = await newUser.save();

        if (newRegisteredUser) {
            return res.status(201).json({newRegisteredUser : newRegisteredUser,message:"Registration successfull"}); // 201: Created
        } else {
            return res.status(500).json({ message: "Failed to register user" });
        }
    } catch (error) {
        console.error("Error in user registration:", error);
        console.error("Error details:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};


const Login = async (req, res) => {
    try {
        const { username, password } = sanitize(req.body);

        if (!username || !password) {
            return res.status(400).json({ message: "Please provide username and password" });
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            // Password is valid
            req.session.authUser = user;
            const result = await User.updateOne({ _id: user._id }, { $set: { status: true } });
            result ? res.status(200).json(req.session.authUser) : res.status(400).json({ message: "Status not updated" });
        } else {
            return res.status(401).json({ message: "Invalid password" });
        }
    } catch (error) {
        console.error("Error in user login:", error);
        console.error("Error details:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const Logout = async (req, res) => {
    try {
        if (!req.session.authUser) {
            return res.status(400).json({ message: "User not logged in" });
        }

        const { username, _id, status } = req.session.authUser;

        try {
            const result = await User.updateOne({ _id: _id }, { $set: { status: false } });
            if (!result) {
                return res.status(400).json({ message: "Status not updated" });
            }
        } catch (error) {
            console.error("Error updating status:", error);
            console.error("Error details:", error.message);
            return res.status(500).json({ message: "Error updating status" });
        }

        const response = req.session.destroy();
        res.clearCookie('connect.sid');
        console.log(response);
        return res.status(200).json({ message: "Logout successful", username: username, _id: _id, status: status });

    } catch (error) {
        console.error("Internal server error:", error);
        console.error("Error details:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    Registration,
    Login,
    Logout,
};
