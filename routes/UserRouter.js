import { Router } from 'express'
import { getUser, updateUser } from '../controllers/UserController.js'
import { authenticateUser } from '../middlewares/authenticate.js'
import { validateUpdateInput } from '../middlewares/validator.js'

const router = Router()

router.get('/current', authenticateUser, getUser)
router.patch('/update', authenticateUser, validateUpdateInput, updateUser)

export default router
