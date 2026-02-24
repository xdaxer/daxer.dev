import axios from "axios";
import { Request,Response } from "express";

const meController = async (req: Request, res:Response) => {
  const response = await axios.get("https://vu4ll.com.tr/api/daxer")

  res.json(response.data)
};

export default meController;