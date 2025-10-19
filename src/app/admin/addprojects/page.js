'use client';  // must be first line

import { useState } from 'react';
import axios from 'axios';  // ✅ you forgot this line earlier

const AddProjectsPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/addprojects', {
        title,
        description,
        link,
      });
      console.log('✅ Project added:', response.data);

      // Reset form fields
      setTitle('');
      setDescription('');
      setLink('');
    } catch (error) {
      console.error('❌ Error adding project:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Project</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-96">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="url"
          placeholder="Project Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectsPage;
