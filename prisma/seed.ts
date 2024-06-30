import fs from 'fs/promises';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const invitationsJson = await fs.readFile(path.join('prisma', 'seed.json'), 'utf8');
    const invitations = await prisma.invitation.createMany({
        // @ts-ignore
        data: JSON.parse(invitationsJson),
    });

    console.log({ invitations });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
