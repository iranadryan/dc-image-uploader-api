import path from 'node:path'
import multer from 'multer'
import { APPError } from '../app/errors/APPError'

export const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve('uploads'))
    },
    filename(req, file, callback) {
      const fileExtension = file.originalname.split('.').slice(-1)
      const fileName = `${file.fieldname}-${Date.now()}.${fileExtension}`

      callback(null, fileName)
    },
  }),
  limits: {
    fileSize: 3000000,
  },
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return callback(new APPError('Upload a valid image file'))
    }

    callback(null, true)
  },
})
