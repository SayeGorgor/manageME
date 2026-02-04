import styles from './page.module.css';
import OrgMemberCard from '@/components/cards/org-member-card';

export default function MembersPage() {
    return(
        <main className={styles.page}>
            <div className={styles['title-container']}>
                <h1>Team Members</h1>
                <h2>- Amazon</h2>
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
                    <li>
                        <OrgMemberCard name='Chris Jenner' />
                    </li>

                    <li>
                        <OrgMemberCard name='Tom Hanks' />
                    </li>

                    <li>
                        <OrgMemberCard name='Mark Merrill' />
                    </li>

                    <li>
                        <OrgMemberCard name='Becky Hill' />
                    </li>

                    <li>
                        <OrgMemberCard name='Sunisa Le' />
                    </li>
                </ul>
            </section>
        </main>
    )
}