import express from "express";
const router = express.Router();
import { chat } from "../controllers/gemini/chat.js";
import { upload } from "../multer/index.js";
import { streamChat } from "../controllers/gemini/streamChat.js";

router.post("/chat", upload.single("image"), chat);
router.post("/stream-chat", upload.single("image"), streamChat);

export default router;
