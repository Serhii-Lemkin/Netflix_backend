import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../Models/UserSchema.js';
import { generateToken } from '../utils.js';

const authRouter = express.Router();

authRouter.post(
  '/login',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          username: user.username,
          profilePicture: user.profilePicture,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
      } else {
        res.status(401).send({ message: 'Invalid Password/User' });
      }
    } else {
      res.status(401).send({ message: 'Invalid Password/User' });
    }
  })
);

authRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();

    res.send({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user),
    });
  })
);

export default authRouter;
