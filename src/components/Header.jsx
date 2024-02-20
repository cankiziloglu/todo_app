import { useTasksContext } from '../lib/hooks';

const Header = () => {
  const { tasks } = useTasksContext();

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
