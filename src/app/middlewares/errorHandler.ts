import { NextFunction, Request, Response } from 'express'
import { APPError } from '../errors/APPError'
import { MulterError } from 'multer'

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof APPError) {
    return res.status(400).json({ error: error.message })
  }

  if (error instanceof MulterError) {
    return res.status(400).json({ error: error.message })
  }

  console.log(error)

  res.sendStatus(500)
}
