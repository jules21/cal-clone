function Button({ children, color, type, isDisabled }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "black",
  type: "button",
  isDisabled: false,
};

export default Button;
