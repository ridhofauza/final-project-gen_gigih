import express from 'express';
import VideoProduct from '../models/VideoProduct.js';

const router = express.Router();

router.get('/:videoID', async (req, res) => {
   const idParams = req.params.videoID;
   try {
      const getComments = await VideoProduct.find({ videoID: idParams }, 
         { 
            "comments.username": 1, 
            "comments.comment": 1, 
            "comments._id": 1,
            "comments.created_at": 1,
            "comments.updated_at": 1 
         }
      );
      res.status(200).json(getComments[0].comments);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.get('/id/:commentID', async (req, res) => {
   const idParams = req.params.commentID;
   try {
      const video = await VideoProduct.findOne({ "comments._id": idParams });

      if(video?.comments == null) {
         return res.status(404).json({ message: 'Comment not found' });
      }

      const comment = video.comments.find((val) => {
         if(val._id == idParams) {
            return val;
         }
      });
      res.status(200).json(comment);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.post('/', async (req, res) => {
   const { videoID: reqVideoID, username: reqUsername, comment: reqComment } = req.body;
   try {
      const comment = {
         username: reqUsername,
         comment: reqComment,
         created_at: new Date(),
         updated_at: ""
      };

      const video = await VideoProduct.findOne({ videoID: reqVideoID });
      if(!video) {
         return res.status(404).json({ message: 'Video not found' });
      }

      video.comments.push(comment);
      await video.save();
      res.status(201).json(video.comments[video.comments.length - 1]);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

router.patch('/id/:commentID', async(req, res) => {
   const { commentID: paramCommentID } = req.params;
   const { username: reqUsername, comment: reqComment } = req.body;
   try {
      const video = await VideoProduct.findOne({ "comments._id": paramCommentID });
      if(!video) {
         return res.status(404).json({ message: 'Comment not found' });
      }

      const idxComment = video.comments.findIndex((val) => {
         return val._id == paramCommentID
      });

      const oldComment = video.comments[idxComment];
      const comment = {
         username: reqUsername,
         comment: reqComment,
         created_at: oldComment.created_at,
         updated_at: new Date()
      };
      video.comments[idxComment] = comment;
      await video.save();
      res.status(200).json(video.comments[idxComment]);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

router.delete('/id/:commentID', async (req, res) => {
   const { commentID: paramCommentID } = req.params;
   try {
      const video = await VideoProduct.findOne({ "comments._id": paramCommentID });
      if(!video) {
         return res.status(404).json({ message: 'Comment not found' });
      }

      const idxComment = video.comments.findIndex((val) => {
         return val._id == paramCommentID
      });
      const deletedComment = video.comments[idxComment];
      video.comments.splice(idxComment,1);
      await video.save();
      res.send(deletedComment);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});
export default router;