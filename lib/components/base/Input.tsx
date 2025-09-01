import React from 'react';
import { IInputProps } from "@/interface/component/base.interface";

const Input = ({
  type = 'text',
  label,
  placeholder = '',
  className = '',
  inputClassName = '',
  value,
  onChange,
  icon,
}: IInputProps) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      {icon && (
        <div className="absolute left-2 text-gray-400">
          {icon}
        </div>
      )}
      <div className='w-full'>
        <label className="block font-medium mb-1">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full py-2 ${icon ? 'px-8' : 'px-2'} border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${inputClassName}`}
        />
      </div>
    </div>
  );
};

export default Input;