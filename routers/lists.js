import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import List from '../Models/ListSchema.js';
import { isAuth } from '../utils.js';

const listsRouter = express.Router();

//create

listsRouter.post(
  '/create',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.user.isAdmin) {
      const newList = new List(req.body);
      console.log('before' + newList);
      try {
        const savedList = await newList.save();
        console.log('after' + savedList);
        res.status(200).json(savedList);
      } catch (error) {
        res.status(500).json(error);
      }
    } else res.status(403).json({ message: 'you are not allowed to create' });
  })
);

//get list

listsRouter.get('/get', isAuth, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete list

listsRouter.delete(
  '/delete/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.user.isAdmin) {
      try {
        await List.findByIdAndDelete(req.params.id);
        res.status(201).json(`The list ${req.params.id} has been deleted...`);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json('You are not allowed!');
    }
  })
);

export default listsRouter;
