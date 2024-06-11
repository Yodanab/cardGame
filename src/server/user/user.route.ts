import { Router } from "express";
import crypto from "crypto";
import {
  generateId,
  userDB,
} from "../database/database";
import {
  SignUpSchema,
  LoginSchema,
} from "shared/schema/schema";

export const userRoute = Router();

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = LoginSchema.safeParse(
      req.body
    );
    if (!userData.success) {
      throw new Error("Invalid input data");
    } else {
      const user = await userDB.get(email);
      if (user) {
        const isPasswordCorrect =
          crypto
            .pbkdf2Sync(
              password,
              "salt",
              100000,
              64,
              "sha512"
            )
            .toString("hex") === user.password;
        if (isPasswordCorrect) {
          const {
            password,
            ...userWithoutPassword
          } = user;
          return res.json(userWithoutPassword);
        } else {
          return res.status(400).json({
            msg: "Wrong User Name Or Password",
          });
        }
      } else {
        return res.status(400).json({
          msg: "User not found",
        });
      }
    }
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Internal server error" });
  }
});

userRoute.post("/register", async (req, res) => {
  try {
    const userData = SignUpSchema.safeParse(
      req.body
    );
    if (!userData.success)
      throw new Error("Invalid input data");

    const {
      userName,
      password,
      email,
    } = req.body;
    const user = await userDB.get(email);

    if (user) {
      return res.status(400).json({
        msg:
          "We're sorry. This login email already exists",
      });
    } else {
      const hashPassword = crypto
        .pbkdf2Sync(
          password,
          "salt",
          100000,
          64,
          "sha512"
        )
        .toString("hex");
      const newUser = {
        userName,
        email,
        coins: 0,
        id: generateId(),
      };
      await userDB.put(email, {
        ...newUser,
        password: hashPassword,
      });
      return res.json(newUser);
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error" });
  }
});
