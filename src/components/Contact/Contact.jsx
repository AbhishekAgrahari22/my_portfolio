

import React from 'react';

function Contact() {
  return (
    <div
      id="contact"
      className="relative w-full min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-4 py-32"
    >
      <div
        className="w-full max-w-lg p-10 rounded-2xl shadow-lg"
        style={{ backgroundColor: 'rgb(16, 13, 37)' }}
      >
        <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2">Get in touch</h3>
        <h1 className="text-5xl font-extrabold mb-8">
          Contact<span className="text-white">.</span>
        </h1>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-semibold" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="What's your name?"
              className="w-full px-4 py-3 rounded-md bg-[#1b1e37] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-semibold" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="What's your email?"
              className="w-full px-4 py-3 rounded-md bg-[#1b1e37] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm font-semibold" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="What do you want to say?"
              className="w-full px-4 py-3 rounded-md bg-[#1b1e37] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-[#1b1e37] rounded-md text-white font-semibold hover:bg-cyan-600 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
