import { type InvitationWithRsvps } from '../types/invitation.type';
import { axiosInstance } from './axios';

export async function findByCode(code: string): Promise<InvitationWithRsvps | null> {
    const response = await axiosInstance.get(`/api/invitations/${code}`);
    const { invitation } = response.data;
    return invitation;
}
