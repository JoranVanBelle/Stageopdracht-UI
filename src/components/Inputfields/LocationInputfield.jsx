import { useFormContext } from 'react-hook-form';

export default function LocationInputField({label, location, name}) {

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
        value={location}
        style={{border: "none", borderBottom: "1px solid darkgray", margin: "3% 5%", padding: "0 15px 0 5px", width: "70%"}}
        disabled={true}
      />
    </div>
  );
}