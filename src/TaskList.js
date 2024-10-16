import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div key={task.id} className="task-item">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(task.id)}
                    />
                    <span className={task.completed ? 'completed' : ''}>
                        {task.text}
                    </span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
