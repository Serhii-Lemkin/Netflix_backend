import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../Models/UserSchema.js';
import { generateToken } from '../utils.js';

const authRouter = express.Router();

authRouter.post(
  '/login',
  expressAsyncHandler(async (req, res) => {
    console.log('login');
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    console.log(req.body.password);
    if (user) {
      console.log('in if');
      if (bcrypt.compareSync(req.body.password, user.password)) {
        console.log('success');
        res.send({
          _id: user._id,
          username: user.username,
          profilePicture: user.profilePicture,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
      } else {
        console.log('wrongpassword');
        res.status(401).send({ message: 'Invalid Password/User' });
      }
    } else {
      console.log('Invalid Password/User');

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
