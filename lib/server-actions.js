'use server';

import { prisma } from "./prisma";
import { cookies } from "next/headers";
import bcrypt from 'bcrypt';
import { error } from "node:console";
import { stat } from "node:fs/promises";

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
    try {
        const sessionID = cookieStore.get('session')?.value;
        if(!sessionID) return { 
            error: { 
                message: 'Error Finding User', 
                status: 404 
            }
        };

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

        if(!session || session['expires_at'] < new Date()) {
            await prisma.sessions.delete({ where: { id: sessionID } }).catch(() => {});
            return { 
                error: { 
                    message: 'Error Finding Session', 
                    status: 404 
                }
            };
        }

        return { data: session.user };
    } catch(err) {
        return { 
            error: { 
                message: 'Internal Server Error', 
                status: 500 
            }
        };
    }
}

export async function getUserOrgs(id) {
    try {
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
    } catch(error) {
        return null;
    }
}

export async function getOrgMembers(id) {
    try {
        const members = await prisma.memberships.findMany({
            where: { org_id: id },
            select: {
                id: true,
                role: true,
                user: {
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true
                    }
                }
            }
        });

        return members;
    } catch(error) {
        return null;
    }
}

export async function getUserTasks(info) {
    const { userID, orgID } = info;

    try {
        const tasks = await prisma.tasks.findMany({
            where: {user_id: userID, org_id: orgID},
            select: {
                id: true,
                content: true,
                title: true,
                deadline: true,
                completed_at: true,
                created_at: true
            },
            orderBy: {
                deadline: {
                    sort: 'asc',
                    nulls: 'last'
                }
            }
        });

        return tasks;
    } catch(error) {
        return null;
    }
}

export async function getOrgEvents(info) {
    const { orgID, userID } = info;

    try {
        const { role } = await prisma.memberships.findFirst({
            where: { org_id: orgID, user_id: userID },
            select: {
                role: true
            }
        });
        if(!role) return null;

        const events = await prisma.events.findMany({
            where: {
                org_id: orgID,
                ...(role === 'MEMBER' && { role })
            },
            select: {
                id: true,
                name: true,
                date: true,
                event_type: true,
                content: true,
                start_time: true,
                end_time: true
            },
            orderBy: {
                date: 'asc'
            }
        });

        return events;
    } catch(error) {
        return null;
    }
}

export async function getNotes(info) {
    const { userID } = info;

    try {
        const notes = await prisma.notes.findMany({
            where: { user_id: userID },
            select: {
                id: true,
                org_id: true,
                title: true,
                content: true,
                remind_at: true,
                created_at: true
            },
            orderBy: {created_at: 'desc'}
        });

        return { data: notes };
    } catch(err) {
        return { error: {
            message: err.message ?? 'Internal Server Error',
            status: err.status ?? 500
        }}
    }
}

export async function postNote(info) {
    const { userID, details, title } = info;

    try {
        const note = await prisma.notes.create({
            data: {
                user_id: userID,
                title: title,
                content: details
            }
        });
        if(!note) {
            return { error: { message: 'Error Creating Note', status: 400 } };
        }

        return { data: note };
    } catch(error) {
        return { error: { message: 'Internal Server Error', status: 500 } };
    }
}

export async function postInvite(info) {
    const { orgID, email, userID } = info;

    try {
        const invitation = await prisma.invitations.create({
            data: {
                org_id: orgID,
                email: email,
                expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
                invited_by: userID
            }
        });
        if(!invitation) {
            return { 
                error: { 
                    message: 'Error Creating Invitation', 
                    status: 400 
                }
            }
        }

        return { data: invitation }
    } catch(err) {
        return { 
            error: { 
                message: 'Internal Server Error', 
                status: 500 
            }
        } 
    }
}