import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
import CoursesDetailPage from './pages/Courses/CoursesDetail';
import CoursesAllPage from './pages/Courses/CoursesAllPage';
import CoursesAddAuthorPage from './pages/Courses/CoursesAddAuthorPage';
import RegisterPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodosPage from './pages/TodosPage';
import TodoList from './components/Todos/TodoList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CoursesAddPage from './pages/Courses/CoursesAddPage';
import NotAllowedPage from './pages/NotAllowedPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        {/** Private routes for normal users */}
                        <Route path='/' element={<PrivateRoute roles={['user', 'admin']} />}>
                            <Route path='user' element={<UserPage />} />
                            <Route path='courses' element={<CoursesAllPage />} />
                            <Route path='/courses/:pageId' element={<CoursesDetailPage />} />
                        </Route>

                        {/** Private routes for admins */}
                        <Route path='/' element={<PrivateRoute roles={['admin']} />}>
                            <Route path='courses/add-author' element={<CoursesAddAuthorPage />} />
                            <Route path='courses/add' element={<CoursesAddPage />} />
                        </Route>

                        {/** Public routes */}
                        <Route path='registration' element={<RegisterPage />} />
                        <Route path='not-allowed' element={<NotAllowedPage />} />
                        <Route path='login' element={<LoginPage />} />
                        <Route path='todos' element={<TodosPage />}>
                            <Route index element={<TodoList />} />
                        </Route>
                        <Route path='counter' element={<CounterPage />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
