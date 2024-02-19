import { useRef, useState } from 'react';
import Button from './ui/button';

const AddItemForm = ({ onAddItem }) => {
  const [itemText, setItemText] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate the input
    if (!itemText) {
      setError(true);
      inputRef.current.focus();
      return;
    }
    setError(false);
    onAddItem(itemText);
    setItemText('');
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input
        ref={inputRef}
        type='text'
        placeholder='Item name'
        value={itemText}
        onChange={(e) => {
          setError(false);
          setItemText(e.target.value);
        }}
      />
      {error && <p className='error'>Please enter an item name</p>}
      <Button>Add to List</Button>
    </form>
  );
};

export default AddItemForm;
