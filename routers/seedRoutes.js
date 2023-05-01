import express from 'express';
import { data, listMovieNames, listSeriesNames, genres } from '../data.js';
import User from '../Models/UserSchema.js';
import Content from '../Models/ContentSchema.js';
import List from '../Models/ListSchema.js';
import expressAsyncHandler from 'express-async-handler';
import Types from 'mongoose';

const seedRouter = express.Router();

seedRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await User.deleteMany({});
      const createdUsers = await User.insertMany(data.users);

      await Content.deleteMany({});
      const createdContent = await Content.insertMany(data.content);

      await List.deleteMany({});
      await seedLists(listSeriesNames, 'series');
      await seedLists(listMovieNames, 'movies');

      const createdLists = await List.insertMany(data.lists);
      console.log('finishedLists');
      res.send({ createdContent, createdLists, createdUsers });
    } catch (err) {
      console.log(`Failed to update users/products: ${err.message}`);
    }
  })
);

const seedLists = async (array, type) => {
  for (let i = 0; i < array.length; i++) {
    const isSeries = type === 'movies' ? false : true;

    const newList = await Content.aggregate([
      { $match: { isSeries: isSeries } },
      { $sample: { size: 8 } },
    ]);

    newList.map((i) => i._id);

    const newListcontent = new List({
      title: array[i],
      type: type,
      genre: genres[i],
      contents: newList,
    });
    console.log(newListcontent), console.log(newListcontent.contents);
    await newListcontent.save();
  }
};

export default seedRouter;
