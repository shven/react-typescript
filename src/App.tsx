import React, { useEffect } from 'react';
import './App.css';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import { userMeAsync } from './context/userSlice';

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(userMeAsync());
        };

        fetchData().catch(console.error);
    }, []);
    return (
        <div className={styles.app}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
