import React from 'react';

const Contact = () => {
  return (
    <div className='contact'>
      <form>
        <h2>Contact Us</h2>
        <input type='text' placeholder='Name' name=''></input>
        <input type='email' placeholder='Email' name=''></input>
        <input type='text' placeholder='Subject' name=''></input>
        <textarea placeholder='Type Message' rows={6}></textarea>
        <button onclick='myFunction()'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
