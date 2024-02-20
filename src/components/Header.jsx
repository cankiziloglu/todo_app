import { useTaskStore } from '../stores/TaskStore';

const Header = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <header>
      <img />
      <p className='counter'>
        <b>{tasks.filter((task) => task.completed).length}</b> / {tasks.length}{' '}
        tasks completed
      </p>
    </header>
  );
};

export default Header;
