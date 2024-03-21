import { Request, Response } from "express";

export const GET = async (req:Request, res:Response) => {
    res.send('Home Route');
  };
