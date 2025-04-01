const Button = ({ text, onClick, color = "blue" }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-${color}-500 text-white rounded hover:bg-${color}-700`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  