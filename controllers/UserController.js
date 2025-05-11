import User from '../models/User.js'
import StatusCodes from 'http-status-codes'
import cloudinary from 'cloudinary'
import { promises as fs } from 'fs'

export const getUser = async (req, res) => {
  const user = await User.findById(req.user.id)
  const cleanUser = user.toJSON()

  res.status(StatusCodes.OK).json({ user: cleanUser })
}

export const updateUser = async (req, res) => {
  const newUser = { ...req.body }
  delete newUser.password

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path)
    await fs.unlink(req.file.path)
    newUser.avatar = response.secure_url
    newUser.avatarPublicId = response.public_id
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.id, newUser)

  // Remove old avatar if existed
  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId)
  }

  res.status(StatusCodes.OK).json({ msg: 'User updated successfully', updatedUser })
}
