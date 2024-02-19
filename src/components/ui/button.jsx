const Button = ({ type, children }) => {
  return (
    <button className={`btn ${type === 'btn-sec' && type}`}>{ children }</button>
  );
};

export default Button;
