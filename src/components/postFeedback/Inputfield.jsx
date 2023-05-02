import { useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';


export default function InputField({label, placeholder, name, minLenght, maxLength}) {

  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');

  const {
    isSubmitting, register
  } = useFormContext();

  const handleChange = useCallback((value) => {
    setCount(value.length);
    setUsername(value.replace(/[^a-z-0-9]/, ''));
  }, [])

  return (
    <div className="mb-3" style={{}}>
      <label>
        {label}:
      </label>
      <input
        id={name}
        {...register(name)}
        placeholder={placeholder}
        minLength={minLenght}
        maxLength={maxLength}
        style={{border: "none", borderBottom: "1px solid darkgray", margin: "3% 5%", padding: "0 0 0 5px"}}
        onChange={e => handleChange(e.target.value)}
        disabled={isSubmitting}
        value={username}
        autocomplete="off"
      />
      {count}/{maxLength}
    </div>
  );
}