import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use("/api", routes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(400).json({ message: err.message });
})

export default app;
