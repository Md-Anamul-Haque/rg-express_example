
import { Request, Response } from "express";
export const GET = async (req:Request, res:Response) => {
    res.json({ message: 'You requested a non-ID route',slugs:req.params.slugs });
  };
  