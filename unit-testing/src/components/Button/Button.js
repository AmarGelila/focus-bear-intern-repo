function Button({ type = "button", content, handleClick = () => {} }) {
  return (
    <button type={type} onClick={handleClick}>
      {content}
    </button>
  );
}

export default Button;
