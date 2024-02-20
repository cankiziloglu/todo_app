import { useMemo, useState } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';

const ItemList = ({ items, handleRemoveItem, handleToggleItem }) => {
  const sortingOptions = [
    { value: 'default', label: 'Sort by default' },
    { value: 'completed', label: 'Sort by completed' },
    { value: 'uncompleted', label: 'Sort by uncompleted' },
  ];

  const [sortBy, setSortBy] = useState('default');

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 'completed') {
          return b.completed - a.completed;
        }
        if (sortBy === 'uncompleted') {
          return a.completed - b.completed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className='sorting'>
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <li key={item.id} className='item'>
          <label>
            <input
              type='checkbox'
              checked={item.completed}
              onChange={() => handleToggleItem(item.id)}
            />
            <span>{item.name}</span>
          </label>
          <button onClick={() => handleRemoveItem(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
