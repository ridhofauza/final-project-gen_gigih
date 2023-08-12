import express from 'express';
import VideoProduct from '../models/VideoProduct.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.get('/:videoID', async (req, res) => {
   const idParams = req.params.videoID;
   try {
      const getProducts = await VideoProduct.findOne({ videoID: idParams }, { products: 1 });
      res.status(200).json(getProducts.products);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.get('/id/:productID', async (req, res) => {
   const idParams = req.params.productID;
   try {
      const getVideo = await VideoProduct.findOne({ "products.productID": idParams });
      
      if(getVideo?.products == null) {
         return res.status(404).json({ message: 'Product not found' });
      }

      const product = getVideo.products.find((val) => {
         if (val.productID == idParams) {
            return val;
         }
      });

      res.status(200).json(product);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.post('/', async (req, res) => {
   const { videoID: reqVideoID, linkProduct: reqLinkProduct, title: reqTitle, price: reqPrice } = req.body;
   try {
      const product = {
         productID: `prod-${uuid()}`,
         linkProduct: reqLinkProduct,
         title: reqTitle,
         price: reqPrice,
      };

      const video = await VideoProduct.findOne({ videoID: reqVideoID });

      if(!video) {
         return res.status(404).json({ message: 'Video not found' });
      }

      video.products.push(product);
      await video.save();
      res.status(201).json(video.products[video.products.length - 1]);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

router.patch('/id/:productID', async(req, res) => {
   const { productID: paramProductID } = req.params;
   const { linkProduct: reqLinkProduct, title: reqTitle, price: reqPrice } = req.body;
   try {
      const product = {
         productID: paramProductID,
         linkProduct: reqLinkProduct,
         title: reqTitle,
         price: reqPrice,
      };

      const video = await VideoProduct.findOne({ "products.productID": paramProductID });
      if(!video) {
         return res.status(404).json({ message: 'Product not found' });
      }

      const idxProduct = video.products.findIndex((val) => {
         return val.productID === paramProductID;
      });

      video.products[idxProduct] = product;
      await video.save();
      res.status(200).json(video.products[idxProduct]);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

router.delete('/id/:productID', async (req, res) => {
   const { productID: paramProductID } = req.params;
   try {
      const video = await VideoProduct.findOne({ "products.productID": paramProductID });
      if(!video) {
         return res.status(404).json({ message: 'Product not found' });
      }

      const idxProduct = video.products.findIndex((val) => {
         return val.productID === paramProductID;
      });
      const deletedProduct = video.products[idxProduct];
      video.products.splice(idxProduct,1);
      await video.save();
      res.send(deletedProduct);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

export default router;

