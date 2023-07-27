import React from "react";

interface Props {
    label: string;
    value: number;
    min: number;
    max:number;
    onChange: (value: number) => void;
  }

const Input = ({ label,min, max, value, onChange }:Props) => {
  
    return ( 
    <div>
        <label>
       {label}
        <input
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
        />
      </label>
    </div> );
}
 
export default Input;