import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

const Sidebar = ({handleAddItem}) => {
  return (
    <div className='sidebar'>
      <AddItemForm onAddItem={ handleAddItem } />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
