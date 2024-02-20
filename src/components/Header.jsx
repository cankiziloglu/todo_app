const Header = ({ tasksTotal, tasksComplete }) => {
  return (
    <header>
      <img />
      <p className='counter'>
        <b>{tasksComplete}</b> / {tasksTotal} tasks completed
      </p>
    </header>
  );
};

export default Header;
