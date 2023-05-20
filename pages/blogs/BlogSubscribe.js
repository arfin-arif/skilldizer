import React, { useState } from 'react';
import styles from '../../styles/BlogSubscribe.module.css';

const BlogSubscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., make an API call to subscribe)
    console.log('Email submitted:', email);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Learn something new every week</h2>
      <p className={styles.subtitle}>
        Subscribe to the Skilldizer blog to get useful language learning tools and become a better language learner.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.subscribeButton}>
          Subscribe
        </button>
      </form>
      <p className={styles.disclaimer}>
        By clicking Subscribe you agree to receive blog updates. More information can be found in our{' '}
        <a href="/privacy-policy" className={styles.privacyLink}>
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default BlogSubscribe;
