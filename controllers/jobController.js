import { StatusCodes } from 'http-status-codes';
import Job from '../models/jobModel.js';

// Get all jobs
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

// Create job
export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// Get single job
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `No job with id ${id}` });
  }
  res.status(StatusCodes.OK).json({ job });
};

// Update job
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
  if (!updatedJob) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `No job with id ${id}` });
  }
  res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob });
};

// Delete job
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const deletedJob = await Job.findByIdAndDelete(id);
  if (!deletedJob) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: `No job with id ${id}` });
  }
  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: deletedJob });
};
