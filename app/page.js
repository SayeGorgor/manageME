'use client';

import { useState } from "react";
import styles from "./page.module.css";

import LoginForm from "@/components/forms/login-form";
import SignupForm from "@/components/forms/signup-form";

import FaceBookLogo from '@/public/icons/facebook_logo.svg';
import GoogleLogo from '@/public/icons/google_logo.svg';

export default function Landing() {
  const [loggingInAnimation, setLoggingInAnimation] = useState(true);
  const [loggingInContent, setLoggingInContent] = useState(true);
  const [hideAnimations, setHideAnimations] = useState(true);

  //Functions
  const switchAuthScreen = () => {
    setHideAnimations(false);
    setLoggingInAnimation(!loggingInAnimation);
    setTimeout(() => setLoggingInContent(!loggingInContent), 150);
  }

  return (
      <>
        <main className={styles.main}>

          <section className={`
            ${styles.hero}
            ${loggingInAnimation ? styles['logging-in'] : styles['signing-up']}
            ${hideAnimations ? styles['no-animate'] : ''}
          `}>
            <div className={styles['hero-text']}>
              <h1>manageME</h1>
              <h3>The one stop tool for all your management needs</h3>
            </div>
            <div className={styles['switch-options']}>
              <p>Don't have an account? Click the button below to create one!</p>
              <button 
                className={styles['switch-options-btn']}
                onClick={switchAuthScreen}
              >
                Sign Up
              </button>
            </div>
          </section>

          <section className={`
            ${styles['auth-section']}
            ${loggingInAnimation ? styles['logging-in'] : styles['signing-up']}
            ${hideAnimations ? styles['no-animate'] : ''}
          `}>
            {loggingInContent ? <h2>Log In</h2> : <h2>Sign Up</h2>}
            {loggingInContent ? <LoginForm /> : <SignupForm />}
            <div className={styles.divider}>
                <hr />
                <p>Or</p>
                <hr />
            </div>
            <ul className={styles['oauth-options-list']}>
              <li>
                <div className={styles['oauth-option']}>
                  <GoogleLogo className={styles.logo} />
                  <p>Sign In With Google</p>
                </div>
              </li>
              <li>
                <div className={styles['oauth-option']}>
                  <FaceBookLogo className={styles.logo} />
                  <p>Sign In With Facebook</p>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </>
  );
}
