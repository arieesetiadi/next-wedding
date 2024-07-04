import { type InvitationWithRsvps } from '../types/invitation.type';

export async function findByCode(code: string): Promise<InvitationWithRsvps | null> {
    const response = await fetch(`http://localhost:3000/api/invitations/${code}`);
    const { invitation } = await response.json();

    return invitation;
}
