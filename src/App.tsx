import React from 'react';
import './App.css';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import UserProvider from './context/userContext';

function App() {
    return (
        <div className={styles.app}>
            <UserProvider>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </UserProvider>
        </div>
    );
}

export default App;
