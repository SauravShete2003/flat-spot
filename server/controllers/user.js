import User from ".././models/User.js";

const postSignup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password,
  });
  try {
    await savedUser.save();
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
  const user = await User.findOne({
    email: email,
    password: password,
  });
  if (user) {
    res.json({
      message: "User logged in successfully",
      success: true,
      data: user,
    });
  }  else {
    res.json({
      message: "Invalid email or password",
      success: false,
      data: null,
    });
  }
};

export { postSignup, postLogin };
