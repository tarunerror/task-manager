import React, { useState } from 'react';
import './AddTask.css';

const AddTask = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText('');
        }
    };

    return (
        <div className="add-task">
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;
