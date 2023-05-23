import { useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';


export default function InputField({label, placeholder, name, maxLength}) {


  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');

  const {
    isSubmitting, register
  } = useFormContext();

  const handleChange = useCallback((value) => {
    setUsername(value.replace(/[^a-z-0-9]/, ''));
    setCount(value.length);
  }, [])

  return (
    <div className="mb-3" style={{paddingLeft: "5px"}}>
      <label>
        {label}:
      </label>
      <input
        id={name}
        {...register(name)}
        maxLength={maxLength}
        placeholder={placeholder}
        style={{border: "none", borderBottom: "1px solid darkgray", margin: "3% 5%", padding: "0 0 0 5px", width: "70%"}}
        onChange={e => handleChange(e.target.value)}
        disabled={isSubmitting}
        value={username}
        autoComplete="off"
      />
      {count + " / " + maxLength}
    </div>
  );
}