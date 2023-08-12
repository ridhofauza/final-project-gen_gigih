import mongoose from 'mongoose';
import ProductSchema from './Product.js';
import CommentSchema from './Comment.js';

const videoThumbnailSchema = new mongoose.Schema({
   videoID: {
      required: true,
      type: String
   },
   urlThumbnail: {
      required: true,
      type: String
   },
   products: {
      type: [ProductSchema]
   },
   comments: {
      type: [CommentSchema]
   }
});

const VideoThumbnail = mongoose.model('videoProduct', videoThumbnailSchema);

export default VideoThumbnail;