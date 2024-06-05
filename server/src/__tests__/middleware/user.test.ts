import { loggedIn, notLoggedIn, isAdmin } from "../../middleware/user";
import { Request, Response } from "express-serve-static-core";

const mockRequest = {
  session: {
    passport: null,
  },
} as unknown as Request;

const mockRequestLoggedIn = {
  session: {
    passport: {
      user: {
        role: "user",
      },
    },
  },
} as unknown as Request;

const mockResponse = {
  status: jest.fn(),
  send: jest.fn(),
} as unknown as Response;

describe("user middleware", () => {
  it("should return 403 if not logged in", () => {
    notLoggedIn(mockRequest, mockResponse, jest.fn());
    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.send).toHaveBeenCalled();
  });

  it("should return 401 when logged in", () => {
    loggedIn(mockRequestLoggedIn, mockResponse, jest.fn());
    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.send).toHaveBeenCalled();
  });

  it("should return 403 when user is not admin", () => {
    isAdmin(mockRequestLoggedIn, mockResponse, jest.fn());
    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.send).toHaveBeenCalled();
  });
});
