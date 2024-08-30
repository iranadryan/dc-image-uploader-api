import { Request, Response } from 'express'

class UploadController {
  async store(req: Request, res: Response) {
    const fileName = req.file?.filename

    res.json({
      message: 'Image uploaded',
      fileName,
      filePath: `${process.env.BASE_URL}/uploads/${fileName}`,
    })
  }
}

export default new UploadController()
