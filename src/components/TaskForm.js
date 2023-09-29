// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre de la tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description (optionnelle)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskForm;
