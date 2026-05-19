import axios from "axios";
import { Request, Response } from "express";

const avatarController = async (req: Request, res: Response) => {
  try {
    const apiResponse = await axios.get("https://vu4ll.com.tr/api/daxer");
    const avatarUrl: string = apiResponse.data.avatar;

    const imageResponse = await axios.get(avatarUrl, {
      responseType: "arraybuffer",
    });

    const contentType =
      imageResponse.headers["content-type"] || "image/webp";

    res.set({
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*",
    });

    res.send(imageResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Avatar yüklenemedi" });
  }
};

export default avatarController;
