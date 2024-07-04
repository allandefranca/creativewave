// components/ContactSection.tsx

import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 py-16">
      <div className="max-w-4xl mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-white">
            Get in touch with us to discuss your project or for any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-2">Address: 123 Creative Blvd, Design City</p>
            <p className="text-gray-600 mb-2">Phone: +123 456 7890</p>
            <p className="text-gray-600 mb-2">Email: contact@creativewave.com</p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 mb-2">Your Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 mb-2">Your Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800 mb-2">Your Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
