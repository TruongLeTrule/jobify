import { verifyToken } from '../utils/jwtUtils.js'
import { UnauthenticatedError } from '../errors/customErrors.js'

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
