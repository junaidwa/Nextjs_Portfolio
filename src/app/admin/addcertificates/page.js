'use client';
import { useState } from 'react';
import axios from 'axios';

const AddCertificatesPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/addcertificates', { title, description, details });
      console.log('✅ Certificate added:', response.data);
      setTitle('');
      setDescription('');
      setDetails('');
    } catch (error) {
      console.error('❌ Error adding certificate:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          🏅 Add New Certificate
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Certificate Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          <input
            type="text"
            placeholder="Certificate Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          <textarea
            placeholder="Certificate Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Add Certificate
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCertificatesPage;
