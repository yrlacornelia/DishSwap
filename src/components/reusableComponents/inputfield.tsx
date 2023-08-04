import React from "react";

interface Props {
    label: string;
    value: number;
    min: number;
    max:number;
     error: boolean;
     errorMessage: string;
    // onChange: (value: number) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const Input = ({ label,min, max, value, error, errorMessage, onChange }:Props) => {
  
    return ( 
    <div className="flex flex-col " >

        <label className="py-2 gap-1 flex flex-col">
       {label}
        <input
          required
    className="flex flex-col w-full p-2"
          type="number"
          min={min}
          max={max}
          value={value}
          
          // onChange={(e) => onChange(parseInt(e.target.value))}
          onChange={onChange}
        />
          {error && <p className="text-red-600">{errorMessage}</p>}
      </label>
    </div> );
}
 
export default Input;