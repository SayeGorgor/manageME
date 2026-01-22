import styles from './signup-form.module.css';

export default function SignupForm() {
    return(
        <form className={styles.body}>
            <div className={styles['name-inputs']}>
                <input 
                    name='first-name' 
                    type='text' 
                    placeholder='First Name' 
                    autoComplete='given-name'
                    required
                />

                <input 
                    name='last-name' 
                    type='text' 
                    placeholder='Last Name' 
                    autoComplete='family-name'
                    required
                />
            </div>

            <input 
                name='email' 
                type='email' 
                placeholder='Email' 
                autoComplete='email'
                required
            />

            {/* <input 
                name='invite-code' 
                type='text' 
                placeholder='Invite Code' 
                required
            /> */}

            <input 
                name='password' 
                type='password' 
                placeholder='Password' 
                autoComplete='new-password'
                required
            />

            <input 
                name='password-confirm' 
                type='password' 
                placeholder='Confirm Password' 
                autoComplete='off'
                required
            />

            <button type='submit' className={styles['signup-btn']}>Sign Up</button>
        </form>
    );
}