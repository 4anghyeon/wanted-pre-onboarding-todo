import React, {forwardRef} from 'react';

interface InputProps {
  value: string;
  changeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({value, changeEvent}, ref) => {
  return (
    <input
      type="text"
      placeholder={'할 일을 적어주세요'}
      value={value}
      onChange={changeEvent}
      className="p-2 border-2 border-amber-300 rounded-lg"
      ref={ref}
    />
  );
});

export default Input;
