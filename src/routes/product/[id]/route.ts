import { Request as ExpressRequest, Response } from 'express';
type Request = ExpressRequest<{ id: string; }>;

export const GET = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `You requested data for ID: ${id}` });
};
