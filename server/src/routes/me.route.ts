import express from "express";
import meController from "../controllers/me.controller";
import avatarController from "../controllers/avatar.controller";
import spotifyController from "../controllers/spotify.controller";

const router = express.Router();

router.get("/", meController);
router.get("/avatar", avatarController);
router.get("/spotify", spotifyController);
export default router;
