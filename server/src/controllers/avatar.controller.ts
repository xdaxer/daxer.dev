import axios from "axios";
import { Request, Response } from "express";

const avatarController = async (req: Request, res: Response) => {
   const response = await axios.get("https://vu4ll.com.tr/api/daxer")


   res.redirect(response.data.avatar)
};

export default avatarController;
