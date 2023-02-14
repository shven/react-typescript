import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import styles from './App.module.css';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CourseProvider from './context/courseContext';
import AuthorProvider from './context/authorContext';

function App() {
    return (
        <div className={styles.app}>
            <CourseProvider>
                <AuthorProvider>
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
                </AuthorProvider>
            </CourseProvider>
        </div>
    );
}

export default App;
