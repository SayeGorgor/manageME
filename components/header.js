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
                    <button className={styles['option']}>Join Now!</button>
                </li>
                <li>
                    <button className={styles['option']}>Log In</button>
                </li>
            </ul>
        </header>
    );
}