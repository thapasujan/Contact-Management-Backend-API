import expressAsyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//@desc register all user
//@route post /api/users
//@access Public

// for get all contacts
const registerUser = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  console.log(req.body);

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  // creating a hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password: ", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).send(`User registration successful with email: ${email}`);
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401);
    throw new Error("User not found. Please register");
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
    res.send(accessToken);
  } else {
    res.status(401);
    throw new Error("Email or password does not match");
  }
});

const getCurrentUser = expressAsyncHandler(async (req, res) => {
  res.json(req.user);
});

export { registerUser, loginUser, getCurrentUser };
