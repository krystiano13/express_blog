import { body } from "express-validator";

export const validateTitle = body("title")
  .exists()
  .withMessage("Title is required")
  .isString()
  .withMessage("Title must be a string");

export const validateContent = body("content")
  .exists()
  .withMessage("Content is required")
  .isString()
  .withMessage("Content must be a string");

export const validateDate = body("date")
  .exists()
  .withMessage("Date is required")
  .isDate()
  .withMessage("Date must be a valid date");
