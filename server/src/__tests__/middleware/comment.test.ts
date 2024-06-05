import { Request, Response } from "express-serve-static-core";
import { checkPostID, checkCommentID } from "../../middleware/comment";

const mockRequestwithParams = {
  params: {
    post_id: 1,
    id: 1,
  },
} as unknown as Request;

const mockRequest = {
    params: {
        post_id: null,
        id: null
    }
} as unknown as Request;

const mockResponse = {
  status: jest.fn().mockReturnThis(),
  send: jest.fn(),
} as unknown as Response;

describe("Comment Middleware", () => {
  it("should return 404 if post id not found", () => {
    checkPostID(mockRequest, mockResponse, jest.fn());
    expect(mockResponse.status).toHaveBeenCalledWith(404);
  });

  it("should return 404 if comment id not found", () => {
    checkCommentID(mockRequest, mockResponse, jest.fn());
    expect(mockResponse.status).toHaveBeenCalledWith(404);
  });
});
