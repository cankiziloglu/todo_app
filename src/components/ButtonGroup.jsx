import Button from './ui/button';

const buttons = [
  'Mark all as complete',
  'Mark all as incomplete',
  'Reset',
  'Remove all Items',
];

const ButtonGroup = () => {
  return (
    <div className='button-group'>
      {buttons.map((button, index) => (
        <Button key={index} type='btn-sec'>
          {button}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
