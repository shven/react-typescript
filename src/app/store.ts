import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { counterReduxSlice } from '../components/CounterRedux/counterReduxSlice';
import todosSlice from '../components/Todos/todosSlice';
import { courseSlice } from '../components/Courses/courseSlice';
import { authorSlice } from '../components/Authors/authorSlice';

export const store = configureStore({
    reducer: {
        counter: counterReduxSlice.reducer,
        todos: todosSlice.reducer,
        courses: courseSlice.reducer,
        authors: authorSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
