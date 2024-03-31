import { Router } from 'express';
import {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';
import { validateJob } from '../middlewares/validationMiddleware.js';

const router = Router();

router.route('/').get(getAllJobs).post(validateJob, createJob);
router
  .route('/:id')
  .get(getJob)
  .patch(validateJob, updateJob)
  .delete(deleteJob);

export default router;
