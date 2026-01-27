const Button = ({ name, count, handleClick }) => {
  return (
    <button
      className="action-btn"
      onClick={handleClick}
      disabled={count <= 0 && name === "DEC"}
    >
      {name}
    </button>
  );
};

export default Button;