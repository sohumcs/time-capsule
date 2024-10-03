import React, { useState } from 'react';

const TimeCapsuleForm = ({ onCreateCapsule }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [unlockDate, setUnlockDate] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const capsule = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      unlockDate: new Date(unlockDate),
      file, // Save the file in the capsule object
    };

    onCreateCapsule(capsule);
    setTitle('');
    setContent('');
    setUnlockDate('');
    setFile(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Save the selected file to state
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Content:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <label>Unlock Date and Time:</label>
      <input
        type="datetime-local"
        value={unlockDate}
        onChange={(e) => setUnlockDate(e.target.value)}
        required
      />

      <label>Upload File:</label>
      <input type="file" onChange={handleFileChange} required />

      <button type="submit">Create Time Capsule</button>
    </form>
  );
};

export default TimeCapsuleForm;
