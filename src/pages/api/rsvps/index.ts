import type { NextApiRequest, NextApiResponse } from 'next';
import type { RsvpBody } from '@/lib/types/rsvp.type';
import * as rsvpService from '@/lib/services/rsvp.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;

    if (method == 'GET') {
        // @ts-ignore
        const limit = req.query.limit as number;
        const rsvps = await rsvpService.get(limit);
        res.status(200).json({ rsvps });
    }

    if (method == 'POST') {
        const body = req.body as RsvpBody;
        const rsvp = await rsvpService.store(body);
        res.status(201).json({ rsvp });
    }
}
