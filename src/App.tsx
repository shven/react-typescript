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
import CreateAuthor from './components/CreateCourse/components/CreateAuthor/CreateAuthor';

function App() {
    return (
        <div className={styles.app}>
            <CourseProvider>
                <AuthorProvider>
                    <Header />
                    <main>
                        <Courses />
                        <section>
                            <div className={styles.columns}>
                                <div className={styles.column}>
                                    <h2>Create course</h2>
                                    <CreateCourse />
                                </div>
                                <div className={styles.column}>
                                    <h2>Create new author</h2>
                                    <CreateAuthor />
                                </div>
                            </div>
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
