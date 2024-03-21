// API route with ID parameter
  import { Request, Response } from "express";

  export const GET = async (req:Request, res:Response) => {
    const { id } = req.params;
    res.json({ message: `You requested data for ID: ${id}` });
    };
  