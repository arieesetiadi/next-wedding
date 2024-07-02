import type { Invitation } from '@prisma/client';

export async function findByCode(code: string): Promise<Invitation | null> {
    const response = await fetch(`http://localhost:3000/api/invitations/${code}`);
    const { invitation } = await response.json();

    return invitation;
}
