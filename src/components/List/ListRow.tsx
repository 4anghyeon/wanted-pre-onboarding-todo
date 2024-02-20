import {TodoType} from '../../store/modules/todo-slice.ts';

const ListRow = ({todo}: {todo: TodoType}) => {
  return <div className="m-5 w-6/12">{todo.content}</div>;
};

export default ListRow;
