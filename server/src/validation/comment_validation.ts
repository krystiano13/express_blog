import { body } from "express-validator";

export const validateText = body("text")
  .exists()
  .withMessage("Text is required")
  .isString()
  .withMessage("Text must be a string");
