import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import { hashPassword } from '../utils/passwordUtils.js';

export const register = async (req, res) => {
  const isFirstUser = (await User.countDocuments()) === 0;
  req.body.role = isFirstUser ? 'admin' : 'user';
  req.body.password = await hashPassword(req.body.password);
  await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

export const login = async (req, res) => {
  res.status(200).json({ msg: 'login' });
};
