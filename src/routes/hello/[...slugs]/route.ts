import { type Request as ExpressRequest, type Response } from 'express';
type Request = ExpressRequest & {
    slugs: string[];
};

export const GET = async (req: Request, res: Response) => {
    const { slugs } = req.params;

    res.send({ slugs })
};
    