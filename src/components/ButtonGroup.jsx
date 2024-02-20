import { useTasksContext } from '../lib/hooks';
import Button from './ui/button';

const ButtonGroup = () => {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleReset,
    handleRemoveAll,
  } = useTasksContext();

  return (
    <div className='button-group'>
      <Button onClick={handleMarkAllAsComplete} type='btn-sec'>
        Mark All As Complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} type='btn-sec'>
        Mark All As Incomplete
      </Button>
      <Button onClick={handleReset} type='btn-sec'>
        Reset
      </Button>
      <Button onClick={handleRemoveAll} type='btn-sec'>
        Remove All Tasks
      </Button>
    </div>
  );
};

export default ButtonGroup;
