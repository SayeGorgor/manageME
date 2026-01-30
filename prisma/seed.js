import { prisma } from "../lib/prisma.js";

async function seed() {
    await prisma.users.createMany({
        data: [
            {
                'first_name': 'Saye',
                'last_name': 'Gorgor',
                'password': 'password1',
                'email': 'sgorgor02@gmail.com'
            },
            {
                'first_name': 'Tom',
                'last_name': 'Hanks',
                'password': 'password2',
                'email': 'test@gmail.com'
            },
            {
                'first_name': 'Desi',
                'last_name': 'Banks',
                'password': 'password3',
                'email': 'test2@gmail.com'
            }
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