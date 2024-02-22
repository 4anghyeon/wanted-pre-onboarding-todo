import {ChangeEvent, useRef, useState} from 'react';
import Input from '../Common/Input.tsx';
import Button from '../Common/Button.tsx';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/modules/todo-slice.ts';

const InputRow = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClickAdd = () => {
    if (inputValue.trim().length === 0) {
      alert('할 일을 적어주세요');
      inputRef.current?.focus();
      return;
    }
    const newTodo = {
      id: new Date().getMilliseconds(),
      content: inputValue,
    };

    dispatch(addTodo(newTodo));
    setInputValue('');
  };

  return (
    <div className="flex gap-5">
      <Input value={inputValue} changeEvent={handleChangeInput} ref={inputRef} placeholder="할 일을 적어주세요" />
      <Button clickEvent={handleClickAdd} text={'등록'} />
    </div>
  );
};

export default InputRow;
