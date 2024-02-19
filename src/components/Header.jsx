const Header = ({ itemsTotal, itemsComplete }) => {
  return (
    <header>
      <img />
      <p className='counter'>
        <b>{itemsComplete}</b> / {itemsTotal} items completed
      </p>
    </header>
  );
};

export default Header;
