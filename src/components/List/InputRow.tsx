import React, {useState} from 'react';
import Input from '../Common/Input.tsx';
import Button from '../Common/Button.tsx';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/modules/todo-slice.ts';

const InputRow = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClickAdd = () => {
    const newTodo = {
      id: new Date().getMilliseconds(),
      content: inputValue,
    };

    dispatch(addTodo(newTodo));
    setInputValue('');
  };

  return (
    <div className="flex gap-5">
      <Input value={inputValue} changeEvent={handleChangeInput} />
      <Button clickEvent={handleClickAdd} />
    </div>
  );
};

export default InputRow;
