import {createSlice} from '@reduxjs/toolkit';

export interface TodoType {
  id: string;
  content: string;
}

const initialState: TodoType[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: action.payload?.id,
        content: action.payload?.content,
      };

      state.push(newTodo);
      return state;
    },
  },
});

export default todoSlice.reducer;
export const {addTodo} = todoSlice.actions;
