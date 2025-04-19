import React from 'react';

function Contact() {
  return (
    <div id="contacts" className='flex min-h-[70vh] w-full items-center justify-center  duration-300 hover:scale-105 '>
      <form
        action="https://formsubmit.co/rahul372602@gmail.com"
        method="POST"
        className='flex flex-col items-center justify-center gap-5 p-10 w-full max-w-[500px] bg-black rounded-xl shadow-xl shadow-indigo-700'
      >
        <h1 className='text-4xl text-white font-bold'>Get in Touch</h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className='w-full rounded-lg p-3 bg-white text-black'
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className='w-full rounded-lg p-3 bg-white text-black'
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className='w-full rounded-lg p-3 bg-white text-black'
        ></textarea>

        <button
          type="submit"
          className='rounded-lg border border-indigo-600 bg-indigo-500 px-5 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-600'
        >
          Send Message
        </button>
      </form>
    </div>
    
  );
}

export default Contact;
