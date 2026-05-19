import axios from "axios";
import { Request, Response } from "express";

const meController = async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://vu4ll.com.tr/api/daxer");
    const data = response.data;

    if (data?.status?.activities && Array.isArray(data.status.activities)) {
      await Promise.all(
        data.status.activities.map(async (activity: any) => {
          if (activity.applicationId && !activity.assets?.largeImage) {
            try {
              const appRes = await axios.get(
                `https://discord.com/api/v9/applications/${activity.applicationId}/rpc`
              );
              if (appRes.data && appRes.data.icon) {
                activity.fallbackIconUrl = `https://cdn.discordapp.com/app-icons/${activity.applicationId}/${appRes.data.icon}.png?size=160`;
              }
            } catch (err) {
            }
          }
        })
      );
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default meController;