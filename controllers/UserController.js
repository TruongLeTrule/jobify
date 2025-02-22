import User from '../models/User.js'
import StatusCodes from 'http-status-codes'

export const getUser = async (req, res) => {
  const user = await User.findById(req.user.id)
  const cleanUser = user.toJSON()

  res.status(StatusCodes.OK).json({ user: cleanUser })
}

export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body)

  res.status(StatusCodes.OK).json({ msg: 'User updated successfully', user })
}
