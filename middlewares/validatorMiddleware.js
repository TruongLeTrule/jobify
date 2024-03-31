import { body, validationResult } from 'express-validator';
import { BadRequestError } from '../errors/customErrors.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorsMessage = errors.array().map((err) => err.msg);
        throw new BadRequestError(errorsMessage);
      }
      next();
    },
  ];
};

