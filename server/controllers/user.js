import User from ".././models/User.js";
import bcrypt from "bcrypt";

const postSignup = async (req, res) => {
  const { name, email, password, phone, role, profilePicture } = req.body;
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
      profilePicture,
    });

    const savedUser = await user.save();
    res.json({
      message: "User created successfully",
      success: true,
      data: savedUser,
    });
  } catch (err) {
    res.json({
      message: "Error creating user",
      success: false,
      data: null,
    });
  }
};


const postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        message: "Invalid email or password",
        success: false,
        data: null,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        message: "Invalid email or password",
        success: false,
        data: null,
      });
    }

    res.json({
      message: "User logged in successfully",
      success: true,
      data: user,
    });
    
  } catch (err) {
    res.json({
      message: "Error logging in",
      success: false,
      data: null,
    });
  }
};

export { postSignup, postLogin };
