import { type Rsvp, PrismaClient } from '@prisma/client';
import { type RsvpBody } from '../types/rsvp.type';

const prisma = new PrismaClient();

export async function store(data: RsvpBody): Promise<Rsvp | null> {
    return await prisma.rsvp.create({ data });
}
