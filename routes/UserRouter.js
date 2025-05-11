import { Router } from 'express'
import { getUser, updateUser } from '../controllers/UserController.js'
import { authenticateUser } from '../middlewares/authenticate.js'
import { validateUpdateInput } from '../middlewares/validator.js'
import upload from '../middlewares/multerMiddleware.js'

const router = Router()

router.get('/current', authenticateUser, getUser)
router.patch('/update', upload.single('avatar'), authenticateUser, validateUpdateInput, updateUser)

export default router
