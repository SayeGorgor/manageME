import { prisma } from "../lib/prisma.js";

async function seed() {
    await prisma.events.createMany({
        data: [
            {
                'org_id': '1474bf3e-9717-4310-b51a-e279a8b8ed07',
                'name': 'Riot Games Event 1',
                'content': 'This is a sample event for Riot Games',
                'date': new Date('2026-02-10')
            },
            {
                'org_id': '1474bf3e-9717-4310-b51a-e279a8b8ed07',
                'name': 'Riot Games Event 3',
                'content': 'This is YET ANOTHER sample event for Riot Games',
                'date': new Date('2026-02-15')
            },
            {
                'org_id': '1474bf3e-9717-4310-b51a-e279a8b8ed07',
                'name': 'Riot Games Event 2',
                'content': 'This is another sample event for Riot Games',
                'date': new Date('2026-02-13')
            },

            {
                'org_id': '1bdeadb0-fb12-402a-88ea-1aa58d86ec6f',
                'name': 'Microsoft Event 1',
                'content': 'This is a sample event for Microsoft',
                'date': new Date('2026-02-10')
            },
            {
                'org_id': '1bdeadb0-fb12-402a-88ea-1aa58d86ec6f',
                'name': 'Microsoft Event 3',
                'content': 'This is YET ANOTHER sample event for Microsoft',
                'date': new Date('2026-02-15')
            },
            {
                'org_id': '1bdeadb0-fb12-402a-88ea-1aa58d86ec6f',
                'name': 'Microsoft Event 2',
                'content': 'This is another sample event for Microsoft',
                'date': new Date('2026-02-13')
            },

            {
                'org_id': '5213bdbf-fa03-4dc4-acf0-2d86bab662eb',
                'name': 'OpenAI Event 1',
                'content': 'This is a sample event for OpenAI',
                'date': new Date('2026-02-10')
            },
            {
                'org_id': '5213bdbf-fa03-4dc4-acf0-2d86bab662eb',
                'name': 'OpenAI Event 3',
                'content': 'This is YET ANOTHER sample event for OpenAI',
                'date': new Date('2026-02-15')
            },
            {
                'org_id': '5213bdbf-fa03-4dc4-acf0-2d86bab662eb',
                'name': 'OpenAI Event 2',
                'content': 'This is another sample event for OpenAI',
                'date': new Date('2026-02-13')
            },

            {
                'org_id': '984e661e-3087-459f-9d57-154f3c35dd3e',
                'name': 'Amazon Event 1',
                'content': 'This is a sample event for Amazon',
                'date': new Date('2026-02-10')
            },
            {
                'org_id': '984e661e-3087-459f-9d57-154f3c35dd3e',
                'name': 'Amazon Event 3',
                'content': 'This is YET ANOTHER sample event for Amazon',
                'date': new Date('2026-02-15')
            },
            {
                'org_id': '984e661e-3087-459f-9d57-154f3c35dd3e',
                'name': 'Amazon Event 2',
                'content': 'This is another sample event for Amazon',
                'date': new Date('2026-02-13')
            },

            {
                'org_id': 'fb9cd02f-092b-4626-848e-0ef40b899c98',
                'name': 'Apple Event 1',
                'content': 'This is a sample event for Apple',
                'date': new Date('2026-02-10')
            },
            {
                'org_id': 'fb9cd02f-092b-4626-848e-0ef40b899c98',
                'name': 'Apple Event 3',
                'content': 'This is YET ANOTHER sample event for Apple',
                'date': new Date('2026-02-15')
            },
            {
                'org_id': 'fb9cd02f-092b-4626-848e-0ef40b899c98',
                'name': 'Apple Event 2',
                'content': 'This is another sample event for Apple',
                'date': new Date('2026-02-13')
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