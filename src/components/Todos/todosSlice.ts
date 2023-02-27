import { createSelector } from 'reselect';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { ITodo, ITodoEntity, ITodosState } from '../../types';

const initialState: ITodosState = {
    entities: {},
    status: 'idle'
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchTodosAsync = createAsyncThunk('todos/fetchTodos', async (): Promise<ITodo[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // The value we return becomes the `fulfilled` action payload
    return await response.json();
});

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const nextId = Object.keys(state.entities).pop();
            if (nextId) {
                const id = parseInt(nextId, 10) + 1;
                const newTodo: ITodo = { id, title: action.payload || '', completed: false };
                state.entities[id] = newTodo;
            }
        },
        toggleTodo: (state, action: PayloadAction<ITodo>) => {
            const todo = action.payload;
            const changes = { completed: !todo.completed };
            state.entities[todo.id] = { ...todo, ...changes };
        },
        deleteTodo: (state, action: PayloadAction<ITodo>) => {
            delete state.entities[action.payload.id];
        }
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodosAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodosAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                const newEntities: ITodoEntity = Object.fromEntries(action.payload.map((todo) => [todo.id, todo]));
                state.entities = { ...state.entities, ...newEntities };
            })
            .addCase(fetchTodosAsync.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

const selectTodoEntities = (state: ITodosState) => state.entities;

export const selectTodos = createSelector(selectTodoEntities, (entities) => Object.values(entities));

export const selectTodoById = (state: RootState, id: string) => state.todos.entities[id];

export const selectTodoIds = (state: RootState) => Object.keys(state.todos.entities);

//export const selectTodoIdsReversed = (state: RootState) => Object.keys(state.todos.entities).reverse();
export const selectTodoIdsReversed = createSelector(selectTodoIds, (selectTodoIds) => selectTodoIds.reverse());

export const selectLastTodoId = createSelector(selectTodoIds, (ids) => ids.pop());

export default todosSlice;