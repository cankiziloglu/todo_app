const Button = ({ type, onClick, children }) => {
  return (
    <button
      className={`btn ${type === 'btn-sec' && type}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
