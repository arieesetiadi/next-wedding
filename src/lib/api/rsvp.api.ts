import type { Invitation } from '@prisma/client';
import type { RsvpBody } from '../types/rsvp.type';

export async function store(data: RsvpBody): Promise<Invitation | null> {
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
