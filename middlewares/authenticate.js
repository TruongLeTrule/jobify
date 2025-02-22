import { verifyToken } from '../utils/jwtUtils.js'
import {
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors.js'

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies

  if (!token) throw new UnauthenticatedError('unauthenticated')

  try {
    const user = verifyToken(token)
    req.user = user
    next()
  } catch (error) {
    throw new UnauthenticatedError('unauthenticated')
  }
}

export const authorizePermissions = (...permissions) => {
  return (req, res, next) => {
    if (!permissions.includes(req?.user?.role))
      throw new UnauthorizedError('not authorized to access this route')
    next()
  }
}
