import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'node:path'
import { router } from './app/routers/router'
import { errorHandler } from './app/middlewares/errorHandler'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(router)
app.use('/uploads', express.static(path.resolve('uploads')))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`🔥 Server is running on port ${port}`)
})
