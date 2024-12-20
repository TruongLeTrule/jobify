import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import mongoose from 'mongoose'

// Routers
import jobRouter from './routes/jobRouter.js'
import authRouter from './routes/authRouter.js'

// Middlewares
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js'

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/v1/jobs', jobRouter)
app.use('/api/v1/auth', authRouter)

// Error handlers
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' })
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
