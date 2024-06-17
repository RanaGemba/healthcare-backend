const express = require('express');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const Image = require('../model/imageModel');

const router = express.Router();

// Create storage engine
const storage = new GridFsStorage({
  url: process.env.MONGODB_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      bucketName: 'uploads', // Setting collection name to store files
      filename: `${Date.now()}-${file.originalname}`, // Setting file name
    };
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const newImage = new Image({
      filename: req.file.filename,
      contentType: req.file.mimetype,
    });

    await newImage.save();
    res.status(201).send('File uploaded successfully');
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
