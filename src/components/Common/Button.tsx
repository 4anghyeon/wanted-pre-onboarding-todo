import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/modules/todo-slice.ts';

const Button = () => {
  const dispatch = useDispatch();
  const handleClickAdd = () => {
    console.log('add');
    const newTodo = {
      id: '',
      content: '123',
    };

    dispatch(addTodo(newTodo));
  };

  return (
    <button className="border-2 border-amber-300 p-5 rounded-lg bg-amber-300 text-white" onClick={handleClickAdd}>
      Add
    </button>
  );
};

export default Button;
