import { useRef, useState } from 'react';
import Button from './ui/button';

const AddTaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate the input
    if (!taskText) {
      setError(true);
      inputRef.current.focus();
      return;
    }
    setError(false);
    onAddTask(taskText);
    setTaskText('');
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Task</h2>
      <input
        ref={inputRef}
        type='text'
        placeholder='Task name'
        value={taskText}
        onChange={(e) => {
          setError(false);
          setTaskText(e.target.value);
        }}
      />
      {error && <p className='error'>Please enter a task name</p>}
      <Button>Add to List</Button>
    </form>
  );
};

export default AddTaskForm;
