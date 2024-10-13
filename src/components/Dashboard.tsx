import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, CheckCircle, Circle } from 'lucide-react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    setIsPremium(localStorage.getItem('isPremium') === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      if (!isPremium && tasks.length >= 5) {
        alert('You have reached the maximum number of tasks for the free plan. Please upgrade to Premium!');
        return;
      }
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
          {isPremium && <span className="text-sm font-semibold text-yellow-500">Premium</span>}
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <PlusCircle size={24} />
          </button>
        </div>
        <ul>
          {tasks.map(task => (
            <li
              key={task.id}
              className="flex items-center p-2 border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleTask(task.id)}
                className="mr-2 text-gray-500 hover:text-blue-500 focus:outline-none"
              >
                {task.completed ? <CheckCircle size={20} /> : <Circle size={20} />}
              </button>
              <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {task.text}
              </span>
            </li>
          ))}
        </ul>
        {!isPremium && (
          <div className="mt-4 text-center">
            <Link to="/premium" className="text-blue-500 hover:text-blue-600">
              Upgrade to Premium
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}