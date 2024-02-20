import { createContext, useEffect, useState } from 'react';
import { initialTasks } from '../lib/constants';

export const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem('tasks')) || initialTasks
  );

  const handleAddTask = (newTaskText) => {
    const newTask = {
      id: new Date().getTime(),
      name: newTaskText,
      completed: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const handleRemoveTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleToggleTask = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleMarkAllAsComplete = () => {
    const newTasks = tasks.map((task) => ({ ...task, completed: true }));
    setTasks(newTasks);
  };

  const handleMarkAllAsIncomplete = () => {
    const newTasks = tasks.map((task) => ({ ...task, completed: false }));
    setTasks(newTasks);
  };

  const handleReset = () => {
    setTasks(initialTasks);
  };

  const handleRemoveAll = () => {
    setTasks([]);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleRemoveTask,
        handleToggleTask,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleReset,
        handleRemoveAll,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
