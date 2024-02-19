import { buttons } from '../lib/constants';
import Button from './ui/button';

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
