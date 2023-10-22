import React, { useState } from 'react';
import axios from 'axios';
import './InputBox.css';

function EmailForm() {
  const [sender, setSender] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          };
      const response = await axios.post('https://stuffin.in/api.php/sendmail', {
        action: 'sendmail', // Include the action parameter
        sender,
        subject,
        content: description,
      }, {headers});
  
      if (response.data.status === 'success') {
        setResponse({ message: 'Email sent successfully', type: 'success' });
      } else {
        setResponse({ message: 'Email sending failed', type: 'error' });
      }
    } catch (error) {
      setResponse({ message: 'Email sending failed', type: 'error' });
    }
  };
  

  return (
    <div>
      <h1>Send Email</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sender's Email:</label>
          <input
            type="email"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
      {response && <p>{response.message}</p>}
    </div>
  );
}

export default EmailForm;
