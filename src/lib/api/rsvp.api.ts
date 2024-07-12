import { axiosInstance } from './axios';

import type { Rsvp } from '@prisma/client';
import type { RsvpBody, RsvpWithInvitation } from '../types/rsvp.type';

export async function get(limit: number = 5): Promise<RsvpWithInvitation | null> {
    const response = await axiosInstance.get('/api/rsvps', { params: { limit } });
    const { rsvps } = response.data;
    return rsvps;
}

export async function store(data: RsvpBody): Promise<Rsvp | null> {
    const response = await axiosInstance.post('/api/rsvps', { data });
    const { rsvp } = response.data;
    return rsvp;
}
