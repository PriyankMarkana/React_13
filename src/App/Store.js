import { configureStore } from '@reduxjs/toolkit'
import Todo from './Todo';
export const store = configureStore({
  reducer: {
    todo:Todo
  },
})