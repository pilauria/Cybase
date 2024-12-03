import express from 'express';
import multer from 'multer';
import path from 'path';
import escapeHtml from 'escape-html';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!!');
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

const escapeHtml = require('escape-html'); // Already imported in your file

router.post('/', upload.single('image'), (req, res) => {
  const safeFilePath = path.basename(req.file.path); // Extract just the filename
  const sanitizedFilePath = escapeHtml(safeFilePath); // Sanitize the extracted filename
  res.send(`File uploaded successfully: ${sanitizedFilePath}`);
});



export default router;
