import axios from 'axios';
import { useState } from 'react';

const ContactForm = () => {
  const [fromEmail, setFromEmail] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an Axios request to submit the form
      const response = await axios.post(process.env.REACT_APP_SEND_EMAIL_URL, {
        from: fromEmail,
        to: toEmail,
        subject: subject,
        message: messageBody,
      });
      console.log('Form submitted successfully:', response.data);
      // Reset form fields
      setFromEmail('');
      setToEmail('');
      setSubject('');
      setMessageBody('');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='fromEmail'>From Email:</label>
        <input
          type='email'
          id='fromEmail'
          value={fromEmail}
          onChange={(e) => setFromEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='toEmail'>To Email:</label>
        <input
          type='email'
          id='toEmail'
          value={toEmail}
          onChange={(e) => setToEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='subject'>Subject:</label>
        <input
          type='text'
          id='subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='messageBody'>Message Body:</label>
        <textarea
          id='messageBody'
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
          required
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ContactForm;
