import React, { useState } from 'react';
const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can replace this with an API call to send form data
    alert('Thanks for contacting us!');
  };
  return (
    <div className='min-h-screen w-full bg-gray-800'>
       <div className="min-h-screen bg-[#1c2736] text-white flex flex-col items-center justify-start pt-20 px-10">
      <h1 className="text-3xl font-bold mb-6">Contact/Support</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-[#2b3b4d] p-5 rounded-lg shadow-md space-y-5">
        <div>
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 rounded bg-[#1f2a38] text-white border border-gray-600"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 rounded bg-[#1f2a38] text-white border border-gray-600"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            name="message"
            required
            rows="4"
            className="w-full px-3 py-2 rounded bg-[#1f2a38] text-white border border-gray-600"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      <div className="mt-10 text-3xl text-gray-300">
        <p>Email: support@example.com</p>
        <p>Phone: +91 12345 67890</p>
        <p>Support Hours: 9:00 AM - 6:00 PM IST (Mon - Fri)</p>
      </div>
    </div>
    </div>
  )
}

export default Support