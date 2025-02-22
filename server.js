import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import mongoose from 'mongoose'

// Routers
import JobRouter from './routes/JobRouter.js'
import AuthRouter from './routes/AuthRouter.js'
import UserRouter from './routes/UserRouter.js'
import AdminRouter from './routes/AdminRouter.js'

// Middlewares
import errorHandlerMiddleware from './middlewares/errorHandler.js'
import { NotFoundError } from './errors/customErrors.js'
import cookieParser from 'cookie-parser'
import {
  authenticateUser,
  authorizePermissions,
} from './middlewares/authenticate.js'

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/jobs', authenticateUser, JobRouter)
app.use('/api/v1/auth', AuthRouter)
app.use('/api/v1/users', UserRouter)
app.use(
  '/api/v1/admin',
  authenticateUser,
  authorizePermissions('admin'),
  AdminRouter
)

// Error handlers
app.use('*', (req, res) => {
  throw new NotFoundError('This route does not exist')
})
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5100

try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
