import { Router } from 'express'
import { getAppStats } from '../controllers/AdminController.js'

const router = Router()

router.get('/app-stats', getAppStats)

export default router
