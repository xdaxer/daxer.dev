import express from "express";
import meController from "../controllers/me.controller";

const router = express.Router();

router.get("/",meController);

export default router;
