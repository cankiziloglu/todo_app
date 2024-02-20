import AddTaskForm from './AddTaskForm';
import ButtonGroup from './ButtonGroup';

const Sidebar = ({
  handleAddTask,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleReset,
  handleRemoveAll,
}) => {
  return (
    <div className='sidebar'>
      <AddTaskForm onAddTask={handleAddTask} />
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
