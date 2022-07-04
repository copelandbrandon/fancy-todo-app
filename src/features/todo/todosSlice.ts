import { createSlice } from "@reduxjs/toolkit";

// todos state will use id for key
const options = {
  name: "todos",
  initialState: {
    todos: {
      1: {
        isCompleted: false,
        text: "example todo",
        id: 1,
      },
    },
  },
  reducers: {
    addTodo: (state: any, action: any) => {
      state.todos = {
        ...state.todos,
        [action.payload.id]: action.payload,
      };
    },
    removeTodo: (state: any, action: any) => {
      delete state.todos[action.payload];
    },
    completeTodo: (state: any, action: any) => {
      state.todos[action.payload].isCompleted = true;
    },
    recompleteTodo: (state: any, action: any) => {
      state.todos[action.payload].isCompleted = false;
    },
  },
};

const todosSlice = createSlice(options);

export const selectTodos = (state: any) => state.todos.todos;

export const { addTodo, removeTodo, completeTodo, recompleteTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
