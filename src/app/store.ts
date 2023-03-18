import { configureStore, ThunkAction, Action, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import { counterReduxSlice } from '../components/CounterRedux/counterReduxSlice';
import todosSlice from '../components/Todos/todosSlice';
import { courseSlice } from '../components/Courses/courseSlice';
import { authorSlice } from '../components/Authors/authorSlice';
import { userSlice } from '../context/userSlice';

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
    user: userSlice.reducer,
    counter: counterReduxSlice.reducer,
    todos: todosSlice.reducer,
    courses: courseSlice.reducer,
    authors: authorSlice.reducer
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
