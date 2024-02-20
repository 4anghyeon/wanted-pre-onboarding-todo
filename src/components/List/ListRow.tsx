import {removeTodo, TodoType} from '../../store/modules/todo-slice.ts';
import Button from '../Common/Button.tsx';
import {useDispatch} from 'react-redux';

const ListRow = ({todo}: {todo: TodoType}) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className="flex justify-between items-center m-5 w-6/12 border border-amber-200 p-5 rounded-md">
      {todo.content}
      <Button clickEvent={handleDeleteTodo} text={'삭제'} />
    </div>
  );
};

export default ListRow;
