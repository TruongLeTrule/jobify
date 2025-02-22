import { StatusCodes } from 'http-status-codes'
import Job from '../models/Job.js'
import User from '../models/User.js'

export const getAppStats = async (req, res) => {
  const users = await User.countDocuments()
  const jobs = await Job.countDocuments()

  res.status(StatusCodes.OK).json({ users, jobs })
}
