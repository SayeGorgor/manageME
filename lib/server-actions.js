'use server';

import { prisma } from "./prisma";

export async function authenticateUser(credentials) {
    const { email, password } = credentials;
    
    const user = await prisma.users.findUnique({
        where: {
            email: email,
            password: password
        }
    });

    console.log('User: ', user);

    if(!user) return {success: false};

    return {success: true, user};
}