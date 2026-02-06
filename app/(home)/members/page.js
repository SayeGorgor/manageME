'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { useOrg } from '@/lib/providers/current-org-provider';

import OrgMemberCard from '@/components/cards/org-member-card';
import BackArrowIcon from '@/public/icons/back_arrow_icon.svg';
import { fetchCurrentUser, fetchTeamMembers } from '@/lib/client-actions';

export default function MembersPage() {
    const [members, setMembers] = useState();
    const { currentOrg } = useOrg();

    //Use Effects
    useEffect(() => {
        (async() => {
            try {
                const teamMembers = await fetchTeamMembers(currentOrg.org.id);
                setMembers(teamMembers);
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

            <section className={styles['owner-section']}>
                <h2>Owner</h2>
                <ul className={styles['member-list']}>
                    <li>
                        <OrgMemberCard name='Saye Gorgor' />
                    </li>
                </ul>
            </section>

            <section className={styles['owner-section']}>
                <h2>Admin</h2>

                <ul className={styles['member-list']}>
                    {}
                    <li>
                        <OrgMemberCard name='Willie Fitz-Gerald' />
                    </li>

                    <li>
                        <OrgMemberCard name='Calvin Klein' />
                    </li>

                    <li>
                        <OrgMemberCard name='Mark Sanders' />
                    </li>
                </ul>
            </section>

            <section className={styles['owner-section']}>
                <h2>Members</h2>

                <ul className={styles['member-list']}>
                    {members.map(member => (
                        <li key={member.id}>
                            <OrgMemberCard name={`${member.user['first_name']} ${member.user['last_name']}`} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}