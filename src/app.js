import express from "express";
import cors from "cors";
import { config } from "./config/config.js";
import { connectDB } from "./config/dbMongo.js";
import { usersRouter } from "./routes/users.routes.js";
import { businessRouter } from "./routes/business.routes.js";
import { ordersRouter } from "./routes/orders.routes.js";

const port = config.server.port;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => console.log(`server running in port ${port}`));

connectDB();

app.use("/api/users", usersRouter);
app.use("/api/business", businessRouter);
app.use("/api/orders", ordersRouter);
