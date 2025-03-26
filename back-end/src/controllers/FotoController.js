import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: 'O arquivo tem que ser png ou jpeg' });
      }

      res.json(req.file);
    });
  }
}

export default new FotoController();
