import express from "express";
import dateController from "../controllers/date.controller";

const router = express.Router();

router.get("/", dateController);

export default router;
