import { Router } from 'express'
import {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} from '../controllers/JobController.js'
import { validateJobInput, validateIdParam } from '../middlewares/validator.js'

const router = Router()

router
  .route('/')
  .get(getAllJobs)
  .post(validateJobInput, createJob)
router
  .route('/:id')
  .get(validateIdParam, getJob)
  .patch(validateIdParam, validateJobInput, updateJob)
  .delete(validateIdParam, deleteJob)

export default router
