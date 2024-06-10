import { Router } from "express";
import { userRoute } from "./user/user.route";

export const routes = Router();

routes.use("/user", userRoute);
