import { useEffect, useState } from 'react';
import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Sidebar from './components/Sidebar';
import { initialTasks } from './lib/constants';

function App() {
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
    <>
      <BackgroundHeading />
      <main>
        <Header
          tasksTotal={tasks.length}
          tasksComplete={tasks.filter((task) => task.completed).length}
        />
        <TaskList
          tasks={tasks}
          handleRemoveTask={handleRemoveTask}
          handleToggleTask={handleToggleTask}
        />
        <Sidebar
          handleAddTask={handleAddTask}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          handleReset={handleReset}
          handleRemoveAll={handleRemoveAll}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
