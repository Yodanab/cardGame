import { Router } from "express";
import { database } from "../database/db";

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
  const { userName, password, email } = req.body;

  const user = database.get(userName);
});
