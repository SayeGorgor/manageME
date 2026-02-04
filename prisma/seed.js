import { prisma } from "../lib/prisma.js";

async function seed() {
    await prisma.memberships.createMany({
        data: [
            {
                'user_id': '66301713-14c8-44ab-8aad-1dd383a714a9',
                'org_id': '1474bf3e-9717-4310-b51a-e279a8b8ed07',
            },
            {
                'user_id': '66301713-14c8-44ab-8aad-1dd383a714a9',
                'org_id': '1bdeadb0-fb12-402a-88ea-1aa58d86ec6f',
            },
            {
                'user_id': '66301713-14c8-44ab-8aad-1dd383a714a9',
                'org_id': '5213bdbf-fa03-4dc4-acf0-2d86bab662eb',
            },
            {
                'user_id': '66301713-14c8-44ab-8aad-1dd383a714a9',
                'org_id': '984e661e-3087-459f-9d57-154f3c35dd3e',
            },
            {
                'user_id': '66301713-14c8-44ab-8aad-1dd383a714a9',
                'org_id': 'fb9cd02f-092b-4626-848e-0ef40b899c98',
            },

            {
                'user_id': 'b36dedd2-0b85-4560-8d16-abd49a362c75',
                'org_id': '1474bf3e-9717-4310-b51a-e279a8b8ed07',
            },
            {
                'user_id': 'b36dedd2-0b85-4560-8d16-abd49a362c75',
                'org_id': '1bdeadb0-fb12-402a-88ea-1aa58d86ec6f',
            },
            {
                'user_id': 'b36dedd2-0b85-4560-8d16-abd49a362c75',
                'org_id': '5213bdbf-fa03-4dc4-acf0-2d86bab662eb',
            },
            {
                'user_id': 'b36dedd2-0b85-4560-8d16-abd49a362c75',
                'org_id': '984e661e-3087-459f-9d57-154f3c35dd3e',
            },
            {
                'user_id': 'b36dedd2-0b85-4560-8d16-abd49a362c75',
                'org_id': 'fb9cd02f-092b-4626-848e-0ef40b899c98',
            },

            {
                'user_id': 'e4bb87f6-812b-453e-80f0-d7a514fc7b9f',
                'org_id': '1474bf3e-9717-4310-b51a-e279a8b8ed07',
            },
            {
                'user_id': 'e4bb87f6-812b-453e-80f0-d7a514fc7b9f',
                'org_id': '1bdeadb0-fb12-402a-88ea-1aa58d86ec6f',
            },
            {
                'user_id': 'e4bb87f6-812b-453e-80f0-d7a514fc7b9f',
                'org_id': '5213bdbf-fa03-4dc4-acf0-2d86bab662eb',
            },
            {
                'user_id': 'e4bb87f6-812b-453e-80f0-d7a514fc7b9f',
                'org_id': '984e661e-3087-459f-9d57-154f3c35dd3e',
            },
            {
                'user_id': 'e4bb87f6-812b-453e-80f0-d7a514fc7b9f',
                'org_id': 'fb9cd02f-092b-4626-848e-0ef40b899c98',
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