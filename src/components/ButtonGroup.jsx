import Button from './ui/button';

const ButtonGroup = ({
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleReset,
  handleRemoveAll,
}) => {
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
