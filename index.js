import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from "./src/routes/message.route.js";
import { connectDB } from "./src/lib/db.js";
import cookieParser from "cookie-parser";
import { app, server } from "./src/lib/socket.js";

dotenv.config();
// const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://fullstack-chatapp-fe.netlify.app",
    credentials: true,
  })
); //http://localhost:5173
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
