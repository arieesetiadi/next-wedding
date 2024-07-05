import { PrismaClient, type Rsvp } from '@prisma/client';
import { RsvpWithInvitation, type RsvpBody } from '../types/rsvp.type';

const prisma = new PrismaClient();

export async function get(limit: number = 5): Promise<RsvpWithInvitation[] | null> {
    return await prisma.rsvp.findMany({
        take: +limit,
        include: {
            invitation: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
}

export async function store(data: RsvpBody): Promise<Rsvp | null> {
    return await prisma.rsvp.create({ data });
}
