import type { Rsvp } from '@prisma/client';
import type { RsvpBody, RsvpWithInvitation } from '../types/rsvp.type';

export async function get(limit: number = 5): Promise<RsvpWithInvitation | null> {
    const response = await fetch(`http://localhost:3000/api/rsvps?limit=${limit}`);
    const { rsvps } = await response.json();

    return rsvps;
}

export async function store(data: RsvpBody): Promise<Rsvp | null> {
    const response = await fetch(`http://localhost:3000/api/rsvps`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
        body: JSON.stringify(data),
    });

    const { rsvp } = await response.json();

    return rsvp;
}
