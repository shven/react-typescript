import React from 'react';
import './App.css';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CourseProvider from './context/courseContext';
import AuthorProvider from './context/authorContext';
import { Outlet } from 'react-router-dom';
import UserProvider from './context/userContext';

function App() {
    return (
        <div className={styles.app}>
            <CourseProvider>
                <AuthorProvider>
                    <UserProvider>
                        <Header />
                        <main>
                            <Outlet />
                        </main>
                        <Footer />
                    </UserProvider>
                </AuthorProvider>
            </CourseProvider>
        </div>
    );
}

export default App;
