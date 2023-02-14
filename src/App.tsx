import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import styles from './App.module.css';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <main>
                <Courses />
                <section>
                    <h2>CreateCourse</h2>
                    <CreateCourse />
                </section>
                <section>
                    <h2>Counter without props</h2>
                    <Counter />
                </section>
                <section>
                    <h2>Counter with props</h2>
                    <Counter minimum={-20} maximum={20} minus={3} plus={3} />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
