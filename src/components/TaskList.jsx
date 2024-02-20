import { useMemo, useState } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';
import { useTasksContext } from '../lib/hooks';

const TaskList = () => {
  const sortingOptions = [
    { value: 'default', label: 'Sort by default' },
    { value: 'completed', label: 'Sort by completed' },
    { value: 'uncompleted', label: 'Sort by uncompleted' },
  ];

  const { tasks, handleRemoveTask, handleToggleTask } = useTasksContext();

  const [sortBy, setSortBy] = useState('default');

  const sortedTasks = useMemo(
    () =>
      [...tasks].sort((a, b) => {
        if (sortBy === 'completed') {
          return b.completed - a.completed;
        }
        if (sortBy === 'uncompleted') {
          return a.completed - b.completed;
        }
        return;
      }),
    [tasks, sortBy]
  );

  return (
    <ul className='task-list'>
      {tasks.length === 0 && <EmptyView />}
      {tasks.length > 0 && (
        <section className='sorting'>
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}
      {sortedTasks.map((task) => (
        <li key={task.id} className='task'>
          <label>
            <input
              type='checkbox'
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span>{task.name}</span>
          </label>
          <button onClick={() => handleRemoveTask(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
