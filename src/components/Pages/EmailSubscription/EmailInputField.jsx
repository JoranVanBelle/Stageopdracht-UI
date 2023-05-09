import { useFormContext } from 'react-hook-form';

export default function EmailInputField({label, email, name}) {

  const {
    register
  } = useFormContext();

  return (
    <div className="mb-3" style={{paddingLeft: "5px"}}>
      <label>
        {label}:
      </label>
      <input
        id={name}
        {...register(name)}
        value={email}
        style={{border: "none", borderBottom: "1px solid darkgray", margin: "3% 10%", padding: "0 0 0 5px"}}
        disabled={true}
      />
    </div>
  );
}