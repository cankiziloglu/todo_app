import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

const Sidebar = ({
  handleAddItem,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleReset,
  handleRemoveAll,
}) => {
  return (
    <div className='sidebar'>
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleReset={handleReset}
        handleRemoveAll={handleRemoveAll}
      />
    </div>
  );
};

export default Sidebar;
