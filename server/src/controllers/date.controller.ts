import { Request, Response } from "express";

const clockController = async (req: Request, res: Response) => {
  res.send(new Date);
};

export default clockController;
