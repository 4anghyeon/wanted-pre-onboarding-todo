import ListRow from './components/List/ListRow.tsx';
import InputRow from './components/List/InputRow.tsx';
import {useSelector} from 'react-redux';
import {RootState} from './store/store.ts';

function App() {
  const todos = useSelector((state: RootState) => state.todoSlice);
  console.log(todos);

  return (
    <div className="flex flex-col m-10 justify-center items-center h-full">
      <InputRow />
      {todos.map(() => (
        <ListRow />
      ))}
    </div>
  );
}

export default App;
