import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import todosReducer from "../features/todo/todosSlice";
import backgroundsReducer from "../features/background/backgroundsSlice";
import weatherReducer from "../features/weather/weatherSlice";
import quoteReducer from "../features/quote/quoteSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    backgrounds: backgroundsReducer,
    weather: weatherReducer,
    quote: quoteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
