import express from "express";
import appSetup from "./config/init";
import routerSetup from "./config/router";
import securitySetup from "./config/security";
import dotenv from "dotenv";
dotenv.config();

const app = express();

appSetup(app);
securitySetup(app, express);
routerSetup(app);
