import mongoose from 'mongoose'
import { body, param, validationResult } from 'express-validator'
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../errors/customErrors.js'
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js'
import Job from '../models/Job.js'
import User from '../models/User.js'

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)

      if (errors.isEmpty()) return next()

      const errorsMessage = errors.array().map((err) => err.msg)

      if (errorsMessage[0].startsWith('no job'))
        throw new NotFoundError(errorsMessage)

      if (errorsMessage[0].startsWith('not authorized'))
        throw new UnauthorizedError(errorsMessage)

      throw new BadRequestError(errorsMessage)
    },
  ]
}

export const validateJobInput = withValidationErrors([
  body('company').notEmpty().withMessage('company is required'),
  body('position').notEmpty().withMessage('position is required'),
  body('jobLocation').notEmpty().withMessage('job location is required'),
  body('jobStatus')
    .isIn(Object.values(JOB_STATUS))
    .withMessage('invalid status'),
  body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('invalid job type'),
])

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    if (!mongoose.Types.ObjectId.isValid(value)) throw new Error('invalid id')

    const job = await Job.findById(value)
    if (!job) throw new Error(`no job with id ${value}`)

    const notAdmin = req.user.role !== 'admin'
    const notOwner = job.createdBy.toString() !== req.user.id

    if (notAdmin && notOwner)
      throw new Error('not authorized to access this job')
  }),
])

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email })
      if (user) throw new Error('email already exists')
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters long'),
  body('lastName').notEmpty().withMessage('last name is required'),
])

export const validateUpdateInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email })
      if (user) throw new Error('email already exists')
    }),
  body('lastName').notEmpty().withMessage('last name is required'),
  body('location').notEmpty().withMessage('location is required'),
])

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
])
