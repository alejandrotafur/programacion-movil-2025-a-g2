interface UserFormProps {
    fields: { name: string; value: string }[];
    onSubmit: (data: any) => void;
  }
  
  const UserForm: React.FC<UserFormProps> = ({ fields, onSubmit }) => {
    return (
      <form onSubmit={(e) => onSubmit(e)}>
        {fields.map((field, index) => (
          <input key={index} name={field.name} value={field.value} />
        ))}
        <button type="submit">Enviar</button>
      </form>
    );
  };
  
  export default UserForm;
  