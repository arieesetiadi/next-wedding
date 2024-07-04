import { Prisma } from '@prisma/client';

export type InvitationWithRsvps = Prisma.InvitationGetPayload<{ include: { rsvps: true } }>;
