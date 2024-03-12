import { StatusCodes } from 'http-status-codes';

export default (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'something went wrong';
  res.status(statusCode).json({ msg });
};
