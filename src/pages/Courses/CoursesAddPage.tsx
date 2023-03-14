import React from 'react';
import styles from '../../App.module.css';
import CreateAuthor from '../../components/CreateCourse/components/CreateAuthor/CreateAuthor';
import CreateCourse from '../../components/CreateCourse/CreateCourse';

export default () => {
    return (
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
    );
};
