import { type Invitation, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function findByCode(code: string): Promise<Invitation | null> {
    return await prisma.invitation.findFirst({ where: { code } });
}
