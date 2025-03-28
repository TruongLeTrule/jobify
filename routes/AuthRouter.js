import { Router } from 'express'
import { register, login, logout } from '../controllers/AuthController.js'
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middlewares/validator.js'

const router = Router()

router.post('/register', validateRegisterInput, register)
router.post('/login', validateLoginInput, login)
router.get('/logout', logout)

export default router
