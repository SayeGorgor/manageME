import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    return(
        <header className={styles.body}>
            <h2>manageME</h2>
            <ul className={`
                ${styles['unauth-options']}
                ${styles['options-list']}
            `}> 
                <li>
                    <Link href='/signup' className={styles['option']}>Join Now!</Link>
                </li>
                <li>
                    <Link href='/login' className={styles['option']}>Log In</Link>
                </li>
            </ul>
        </header>
    );
}