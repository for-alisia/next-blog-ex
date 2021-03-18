// @ts-nocheck
/** Dependencies */
import { useState } from 'react';

/** Components */
import Notification from '../ui/notification';

/** Styles */
import classes from './contact-form.module.css';

const ContactForm = () => {
  const [input, setInput] = useState({ email: '', name: '', message: '' });
  const [status, setStatus] = useState();
  const [notification, setNotification] = useState();

  const inputChangeHandler = (e) => {
    setInput((oldInput) => ({ ...oldInput, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setStatus('pending');
    setNotification({ title: 'Sending a message', message: 'Loading...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      console.log(data);

      setStatus('success');
      setNotification({ title: 'Sending a message', message: 'Message were successfully send' });

      setTimeout(() => {
        setStatus(null);
      }, 3000);

      setInput({ email: '', name: '', message: '' });
    } catch (err) {
      console.log(err.message);
      setStatus('error');
      setNotification({ title: 'Sending a message', message: 'Error: sending failed' });

      setTimeout(() => {
        setStatus(null);
      }, 3000);
    }
  };

  return (
    <section className={classes.contact} onSubmit={submitHandler}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={input.email}
              name="email"
              required
              onChange={inputChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              required
              value={input.name}
              name="name"
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className={classes.controls}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            required
            rows={5}
            value={input.message}
            name="message"
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {status && (
        <Notification title={notification.title} status={status} message={notification.message} />
      )}
    </section>
  );
};

export default ContactForm;
