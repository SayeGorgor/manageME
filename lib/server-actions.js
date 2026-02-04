'use server';

import { prisma } from "./prisma";
import { cookies } from "next/headers";
import bcrypt from 'bcrypt';

export async function authenticateUser(credentials) {
    const { email, password } = credentials;
    
    const user = await prisma.users.findUnique({ 
        where: { email },
        select: {
            id: true,
            password: true
        }
    });
    if(!user) return {success: false};

    const authenticated = await bcrypt.compare(password, user.password);
    if(!authenticated) return {success: false};

    return {success: true, userID: user.id};
}

export async function getCurrentUser() {
    const cookieStore = await cookies();
    const sessionID = cookieStore.get('session')?.value;
    if(!sessionID) return null;

    const session = await prisma.sessions.findUnique({
        where: { id: sessionID },
        select: {
            expires_at: true,
            user: {
                select: {
                    id: true,
                    email: true,
                    first_name: true,
                    last_name: true, 
                    phone_number: true,
                    pfp: true
                }
            }
        }
    });

    console.log('Session User: ', session.user);

    if(!session || session['expires_at'] < new Date()) {
        await prisma.sessions.delete({ where: { id: sessionID } }).catch(() => {});
        return null;
    }

    return session.user;
}

export async function getUserOrgs(id) {
    const orgs = await prisma.memberships.findMany({
        where: {user_id: id},
        select: {
            role: true,
            org: {
                select: {
                    id: true,
                    name: true,
                    pfp: true
                }
            }
        }
    });
    
    return orgs;
}