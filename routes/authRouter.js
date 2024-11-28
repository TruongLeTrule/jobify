import { Router } from 'express'
import { register, login } from '../controllers/authController.js'
import {
    validateRegisterInput,
    validateLoginInput
} from '../middlewares/validator.js'

const router = Router()

router.post('/register', validateRegisterInput, register)
router.post('/login', validateLoginInput, login)

export default router
