import { useFormContext } from 'react-hook-form';


export default function LocationInputField({label, location, name}) {

  const {
    register
  } = useFormContext();

  return (
    <div className="mb-3" style={{}}>
      <label>
        {label}:
      </label>
      <input
        id={name}
        {...register(name)}
        value={location}
        style={{border: "none", borderBottom: "1px solid darkgray", margin: "3% 5%", padding: "0 0 0 5px"}}
        disabled={true}
      />
    </div>
  );
}