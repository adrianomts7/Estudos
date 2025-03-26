"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);

const upload = _multer2.default.call(void 0, _multer4.default).single('foto');

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

exports. default = new FotoController();
