import TaskCard from '@/components/cards/task-card';
import styles from './page.module.css';
import EventCard from '@/components/cards/event-card';

export default function Home() {
    return(
        <main className={styles.page}>
            <section className={styles['tasks-section']}>
                <h2>Tasks</h2>

                <ul className={styles['card-list']}>
                    <li>
                        <TaskCard />
                    </li>
                    
                    <li>
                        <TaskCard />
                    </li>
                </ul>

                <a href='#'>View All</a>
            </section>

            <section className={styles['tasks-section']}>
                <h2>Upcoming Events</h2>

                <ul className={styles['card-list']}>
                    <li>
                        <EventCard />
                    </li>

                    <li>
                        <EventCard />
                    </li>
                </ul>

                <a href='#'>View All</a>
            </section>

            <section className={styles['tasks-section']}>

                <div className={styles['notes-header-container']}>
                    <h2>Notes</h2>
                    <button className={styles['add-note-btn']}>+</button>
                </div>

                <ul className={styles['card-list']}>
                    <li>
                        <TaskCard />
                    </li>

                    <li>
                        <TaskCard />
                    </li>
                </ul>
                
                <a href='#'>View All</a>
            </section>

            <div className={styles['bottom-buttons-container']}>
                <a href='/members' className={'view-team-members-btn'}>View Team Members</a>
            </div>
        </main>
    );
}