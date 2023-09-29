// src/components/Task.js
import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onDelete(task.id)} className="delete-btn">
        Supprimer
      </button>
      <button onClick={() => onToggle(task.id)} className="toggle-btn">
        Terminé
      </button>
    </div>
  );
};

export default Task;
