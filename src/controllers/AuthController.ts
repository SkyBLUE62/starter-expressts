import { Request, Response } from "express";

export const loginAuth = (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === "John Doe" && password === "password") {
    return res.status(200).json({
      message: "Login successful",
      status: 200,
      data: {},
    });
  }

  return res.status(401).json({
    message: "Invalid credentials",
    status: 401,
    data: {},
  });
};
