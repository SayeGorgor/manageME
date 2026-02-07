'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

import { useOrg } from '@/lib/providers/current-org-provider';
import { fetchTeamMembers } from '@/lib/client-actions';

import OrgMemberCard from '@/components/cards/org-member-card';
import BackArrowIcon from '@/public/icons/back_arrow_icon.svg';
import Spinner from '@/public/icons/spinner_animation.svg';

export default function MembersPage() {
    const [members, setMembers] = useState([]);
    const { currentOrg } = useOrg();

    //Use Effects
    useEffect(() => {
        (async() => {
            try {
                const teamMembers = await fetchTeamMembers(currentOrg.org.id);
                setMembers(teamMembers);
                console.log('Members: ', members)
            } catch(error) {
                console.log('Team Members Error: ', error);
            }
        })()
    }, [currentOrg]);

    return(
        <main className={styles.page}>
            <Link href='/dashboard' className={styles['back-arrow']}>
                <BackArrowIcon className={styles['back-arrow-icon']} /> 
            </Link>
            
            <div className={styles['title-container']}>
                <h1>Team Members</h1>
                <h2>- {currentOrg.org.name}</h2>
            </div>

            {members.length === 0 ? 
                <Spinner className={styles.spinner} /> :
                <>
                    <section className={styles['owner-section']}>
                        <h2>Owner</h2>
                        <ul className={styles['member-list']}>
                            {members.filter(member => member.role === 'OWNER')
                                .map(owner => (
                                    <li key={owner.id}>
                                        <OrgMemberCard 
                                            name={`${owner.user['first_name']} ${owner.user['last_name']}`}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </section>

                    <section className={styles['owner-section']}>
                        <h2>Admin</h2>

                        <ul className={styles['member-list']}>
                            <ul className={styles['member-list']}>
                                {members.filter(member => member.role === 'ADMIN')
                                    .map(admin => (
                                        <li key={admin.id}>
                                            <OrgMemberCard 
                                                name={`${admin.user['first_name']} ${admin.user['last_name']}`}
                                            />
                                        </li>
                                    ))
                                }
                            </ul>
                        </ul>
                    </section>

                    <section className={styles['owner-section']}>
                        <h2>Members</h2>

                        <ul className={styles['member-list']}>
                            <ul className={styles['member-list']}>
                                {members.filter(member => member.role === 'MEMBER')
                                    .map(admin => (
                                        <li key={admin.id}>
                                            <OrgMemberCard 
                                                name={`${admin.user['first_name']} ${admin.user['last_name']}`}
                                            />
                                        </li>
                                    ))
                                }
                            </ul>
                        </ul>
                    </section>
                </>
            }
        </main>
    )
}