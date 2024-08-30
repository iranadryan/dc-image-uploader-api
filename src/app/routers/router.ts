import { Router } from 'express'
import UploadController from '../controllers/UploadController'
import { upload } from '../../libs/multer'

export const router = Router()

router.get('/test', (req, res) =>
  res.json({ message: 'Everything is working fine' }),
)

router.post('/uploads', upload.single('image'), UploadController.store)
