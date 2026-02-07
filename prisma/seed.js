import { prisma } from "../lib/prisma.js";

async function seed() {
    await prisma.tasks.createMany({
        data: [
            {
                'user_id': 'b36dedd2-0b85-4560-8d16-abd49a362c75',
                'org_id': '1474bf3e-9717-4310-b51a-e279a8b8ed07',
            },
        ]
    });
}

seed()
    .then(() => prisma.$disconnect)
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });