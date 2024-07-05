import { Prisma } from '@prisma/client';

export type RsvpBody = {
    phone: string;
    isAttend: boolean;
    greetings: string;
    invitationId: number;
};

export type RsvpWithInvitation = Prisma.RsvpGetPayload<{ include: { invitation: true } }>;