'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

import TaskCard from '@/components/cards/task-card';
import EventCard from '@/components/cards/event-card';
import AddNoteWindow from '@/components/add-note-window';

import Spinner from '@/public/icons/spinner_animation.svg';

import { useOrg } from '@/lib/providers/current-org-provider';
import { fetchEvents, fetchUserTasks } from '@/lib/client-actions';

export default function Home() {
    const { currentOrg, setCurrentOrg } = useOrg();

    const [tasks, setTasks] = useState([]);
    const [events, setEvents] = useState([]);
    const [notes, setNotes] = useState([]);
    const [loadingDashCards, setLoadingDashCards] = useState(true);
    const [showAddNoteWindow, setShowAddNoteWindow] = useState(false);
    const [hasError, setHasError] = useState(false);

    //Use Effect
    //Populate Home Page Cards on Load and Org Switch
    useEffect(() => {
        (async() => {
            setLoadingDashCards(true);
            try {
                const fetchedTasks = await fetchUserTasks(currentOrg.org.id);
                setTasks(fetchedTasks);
                const fetchedEvents = await fetchEvents(currentOrg.org.id);
                setEvents(fetchedEvents);
                console.log('Events: ', events);
                setLoadingDashCards(false);
                console.log('Tasks: ', tasks);
            } catch(error) {
                setLoadingDashCards(false);
                setHasError(true);
                console.log('Error: ', error);
            }
        })()
    }, [currentOrg]);

    return(
        <main className={styles.page}>
            <section className={styles['tasks-section']}>
                <h2>Tasks</h2>

                <ul className={styles['card-list']}>
                    {loadingDashCards ? 
                        <Spinner className={styles.spinner} />
                        :
                        tasks.length === 0 ? 
                            <div className={styles['no-tasks-text-wrapper']}>
                                <p className={
                                    styles['no-tasks-text']
                                }>
                                    No Current Open Tasks
                                </p>
                            </div>
                            :
                            tasks.map(task => (
                                <li key={task.id}>
                                    <TaskCard 
                                        content={task.content} 
                                        deadline={task.deadline}
                                        title={task.title}
                                    />
                                </li>
                            ))
                    }
                </ul>

                <a href='#'>View All</a>
            </section>

            <section className={styles['tasks-section']}>
                <h2>Upcoming Events</h2>

                <ul className={styles['card-list']}>
                    {loadingDashCards ? 
                        <Spinner className={styles.spinner} />
                        :
                        events.length === 0 ? 
                            <div className={styles['no-tasks-text-wrapper']}>
                                <p className={
                                    styles['no-tasks-text']
                                }>
                                    No Current Events
                                </p>
                            </div>
                            :
                            events.map(event => (
                                <li key={event.id}>
                                    <EventCard 
                                        content={event.content} 
                                        date={event.date}
                                        name={event.name}
                                        startTime={event['start_time']}
                                        endTime={event['end_time']}
                                    />
                                </li>
                            ))
                    }
                </ul>

                <a href='#'>View All</a>
            </section>

            <section className={styles['tasks-section']}>
                <AddNoteWindow 
                    showAddNoteWindow={showAddNoteWindow}
                    setShowAddNoteWindow={setShowAddNoteWindow}
                />

                <div className={styles['notes-header-container']}>
                    <h2>Notes</h2>
                    <button 
                        className={styles['add-note-btn']}
                        onClick={() => setShowAddNoteWindow(true)}
                    >
                        +
                    </button>
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
                <Link href='/members' className={'view-team-members-btn'}>View Team Members</Link>
            </div>
        </main>
    );
}