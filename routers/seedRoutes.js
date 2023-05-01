import express from 'express';
import { data } from '../data.js';
import User from '../Models/UserSchema.js';
import Content from '../Models/ContentSchema.js';
import List from '../Models/ListSchema.js';
import expressAsyncHandler from 'express-async-handler';

const seedRouter = express.Router();

seedRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    console.log('here');
    try {
      await User.deleteMany({});
      const createdUsers = await User.insertMany(data.users);

      await Content.deleteMany({});
      const createdContent = await Content.insertMany(data.content);

      await List.deleteMany({});
      const createdLists = await List.insertMany(data.lists);
      console.log('finishedLists');
      res.send({ createdContent, createdLists, createdUsers });
    } catch (err) {
      console.log(`Failed to update users/products: ${err.message}`);
    }
  })
);

export default seedRouter;
