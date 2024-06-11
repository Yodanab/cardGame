import { Router } from "express";
import { userDB } from "../database/database";
import { SignUpSchema, extractErrorsMessage } from "shared/schema/schema";

export const userRoute = Router();

// userRoute.post("/login", (req, res) => {
//   const { userName, password } = req.body;
//   const user = users.find(
//     (u) =>
//       u.userName === userName &&
//       u.password === password
//   );
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(400).json({ msg: "no user" });
//   }
// });

userRoute.post("/sign-up", (req, res) => {
  const userData = SignUpSchema.safeParse(req.body);
  const errorMessages = extractErrorsMessage(userData.error);
  console.log(userData.error);
  if (!userData.success) throw Error(errorMessages);
  res.json(userData);
});
