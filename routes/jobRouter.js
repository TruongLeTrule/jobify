import { Router } from 'express';
import {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';
import {
  validateJob,
  validateIdParam,
} from '../middlewares/validationMiddleware.js';

const router = Router();

router.route('/').get(getAllJobs).post(validateJob, createJob);
router
  .route('/:id')
  .get(validateIdParam, getJob)
  .patch(validateIdParam, validateJob, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
