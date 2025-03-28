import { StatusCodes } from 'http-status-codes'
import User from '../models/User.js'
import { hashPassword, comparePassword } from '../utils/passwordUtils.js'
import { UnauthenticatedError } from '../errors/customErrors.js'
import { createToken } from '../utils/jwtUtils.js'

const ONE_HOUR = 1000 * 60 * 60

export const register = async (req, res) => {
  const isFirstUser = (await User.countDocuments()) === 0
  req.body.role = isFirstUser ? 'admin' : 'user'
  req.body.password = await hashPassword(req.body.password)
  await User.create(req.body)
  res.status(StatusCodes.CREATED).json({ msg: 'user created' })
}

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password))

  if (!isValidUser) throw new UnauthenticatedError('invalid credentials')

  const token = createToken({ id: user._id, role: user.role })

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_HOUR),
    secure: process.env.NODE_ENV === 'production',
  })

  res.status(StatusCodes.CREATED).json({ msg: 'login successfully' })
}

export const logout = async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })

  res.status(StatusCodes.OK).json({ msg: 'logout successfully' })
}
