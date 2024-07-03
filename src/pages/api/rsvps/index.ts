import type { NextApiRequest, NextApiResponse } from 'next';
import type { Rsvp } from '@prisma/client';
import type { RsvpBody } from '@/lib/types/rsvp.type';

import * as rsvpService from '@/lib/services/rsvp.service';

type Data = {
    rsvp: Rsvp | null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const body = req.body as RsvpBody;
    const method = req.method;

    if (method == 'POST') {
        console.log({body});
        
        const rsvp = await rsvpService.store(body);
        res.status(201).json({ rsvp });
    }
}
