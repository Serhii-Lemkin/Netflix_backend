import mongoose from 'mongoose';
import Schema from 'mongoose';

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    genre: { type: String, required: true },
    contents: [{ type: Schema.Types.ObjectId, ref: 'Content' }],
    content: { type: Array, required: true },
  },
  { timestamps: true }
);

const List = mongoose.model('List', ListSchema);
export default List;
