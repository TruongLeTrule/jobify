import mongoose from 'mongoose'
import { USER_ROLE } from '../utils/constants.js'

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: 'last name',
  },
  location: {
    type: String,
    default: 'my city',
  },
  role: {
    type: String,
    enum: Object.values(USER_ROLE),
    default: USER_ROLE.USER,
  },
  avatar: String,
  avatarPublicId: String,
})

UserSchema.methods.toJSON = function () {
  const obj = this.toObject()
  delete obj.password
  return obj
}

export default mongoose.model('User', UserSchema)
