import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
   username: {
      required: true,
      type: String
   },
   comment: {
      required: true,
      type: String
   },
   created_at: {
      required: true,
      type: Date
   },
   updated_at: {
      required: false,
      type: Date
   },
});

export default commentSchema;