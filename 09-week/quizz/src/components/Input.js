const Input = ({ label, type = "text", value, onChange }) => {
    return (
      <div className="mb-3">
        <label className="block text-gray-700">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>
    );
  };
  
  export default Input;
  