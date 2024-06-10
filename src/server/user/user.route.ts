import { Router } from "express";

export const userRoute = Router();

userRoute.get("/login", (req, res) => {
  res.json({ message: "Hello World" });
});
