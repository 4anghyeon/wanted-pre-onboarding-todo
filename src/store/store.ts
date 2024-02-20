import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './modules/todo-slice.ts';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    todoSlice,
  },
});

export default store;
