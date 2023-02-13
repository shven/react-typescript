import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Logo from './components/Logo';

import styles from './App.module.css';
import CreateCourse from './components/CreateCourse';

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <Logo />
                <Welcome firstName={'John'} lastName={'Doe'} />
            </header>
            <main className={styles.main}>
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
            <footer className={styles.footer}>&copy; Footer text</footer>
        </div>
    );
}

export default App;
