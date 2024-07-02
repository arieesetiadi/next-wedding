import type { NextApiRequest, NextApiResponse } from 'next';
import type { Invitation } from '@prisma/client';

import * as invitationService from '@/lib/services/invitation.service';

type Data = {
    invitation: Invitation | null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const guestCode = req.query.code as string;
    const invitation = await invitationService.findByCode(guestCode);

    res.status(!!invitation ? 200 : 404).json({ invitation });
}
