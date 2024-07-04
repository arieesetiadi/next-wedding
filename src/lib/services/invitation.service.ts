import { PrismaClient } from '@prisma/client';
import { type InvitationWithRsvps } from '../types/invitation.type';

const prisma = new PrismaClient();

export async function findByCode(code: string): Promise<InvitationWithRsvps | null> {
    return await prisma.invitation.findFirst({
        where: { code },
        include: { rsvps: true },
    });
}
