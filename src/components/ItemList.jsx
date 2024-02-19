const ItemList = ({ items }) => {
  return (
    <ul className='item-list'>
      {items.map((item) => (
        <li key={item.id} className='item'>
          <label>
            <input type='checkbox' checked={item.completed} />
            <span>{item.name}</span>
          </label>
          <button>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
