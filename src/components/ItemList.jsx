import EmptyView from "./EmptyView";

const ItemList = ({ items, handleRemoveItem, handleToggleItem }) => {
  return (
    <ul className='item-list'>
      {
        items.length === 0 && <EmptyView />
      }
      {items.map((item) => (
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
