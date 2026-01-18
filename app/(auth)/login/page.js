import styles from './page.module.css';

export default function LogIn() {
    return(
        <div className={styles.page}>
            <main className={styles['login-form-container']}>
                <h1>Log In</h1>
                <form className={styles['login-form']}>
                    <input 
                        name='email' 
                        type='email' 
                        placeholder='Email'
                        required
                    />
                    <div className={styles['password-wrapper']}>
                        <input 
                            name='password' 
                            type='password' 
                            placeholder='Password'
                            required
                        />
                        <a href='#' className={styles['forgot-password-link']}>
                            Forgot Password
                        </a>
                    </div>
                    <button className={styles['login-btn']} type='submit'>
                        Log In
                    </button>
                </form>
                <a href='#' className={styles['sign-in-link']}>
                    Dont have an account? Sign Up!
                </a>
            </main>
        </div>
    );
}