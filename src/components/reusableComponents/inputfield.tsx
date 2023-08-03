import React from "react";

interface Props {
    label: string;
    value: number;
    min: number;
    max:number;
    // onChange: (value: number) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const Input = ({ label,min, max, value, onChange }:Props) => {
  
    return ( 
    <div className="flex flex-col " >
        <label className="py-2 gap-1 flex flex-col">
       {label}
        <input
    className="flex flex-col w-full"
          type="number"
          min={min}
          max={max}
          value={value}
          // onChange={(e) => onChange(parseInt(e.target.value))}
          onChange={onChange}
        />
      </label>
    </div> );
}
 
export default Input;