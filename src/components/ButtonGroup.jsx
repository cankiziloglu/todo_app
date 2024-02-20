import { useTaskStore } from '../stores/TaskStore';
import Button from './ui/button';

const ButtonGroup = () => {
  const markAllAsComplete = useTaskStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useTaskStore(
    (state) => state.markAllAsIncomplete
  );
  const reset = useTaskStore((state) => state.reset);
  const removeAll = useTaskStore((state) => state.removeAll);

  return (
    <div className='button-group'>
      <Button onClick={markAllAsComplete} type='btn-sec'>
        Mark All As Complete
      </Button>
      <Button onClick={markAllAsIncomplete} type='btn-sec'>
        Mark All As Incomplete
      </Button>
      <Button onClick={reset} type='btn-sec'>
        Reset
      </Button>
      <Button onClick={removeAll} type='btn-sec'>
        Remove All Tasks
      </Button>
    </div>
  );
};

export default ButtonGroup;
