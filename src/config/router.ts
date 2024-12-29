import { Express } from "express";
import authRoutes from "../routes/authRoutes";

const routerSetup = (app: Express) => {
  app.use("/api/auth", authRoutes);
};

export default routerSetup;
