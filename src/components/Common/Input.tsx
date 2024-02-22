import {ChangeEvent, forwardRef, InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({value, changeEvent}, ref) => {
  return (
    <input
      type="text"
      value={value}
      onChange={changeEvent}
      className="p-2 border-2 border-amber-300 rounded-lg"
      ref={ref}
    />
  );
});

Input.displayName = 'Input';

export default Input;
