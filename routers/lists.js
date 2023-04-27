import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import List from '../Models/ListSchema.js';
import { isAuth } from '../utils.js';

const listsRouter = express.Router();

//get list
 
listsRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const newList = await List.find();
      res.status(200).json(newList);
    } catch (error) {
      res.status(500).json(error);
    }
  })
);

//delete list



export default listsRouter;
