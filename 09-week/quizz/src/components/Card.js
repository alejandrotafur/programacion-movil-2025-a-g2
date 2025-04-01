const Card = ({ title, children }) => {
    return (
      <div className="p-5 border shadow-md rounded-lg">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {children}
      </div>
    );
  };
  
  export default Card;
  