import React, { useEffect, useState } from 'react';
import styles from './Counter.module.css';

interface TCounter {
    minimum?: number;
    maximum?: number;
    plus?: number;
    minus?: number;
}

function Counter(props: TCounter) {
    const { minimum = 0, maximum = 10, plus = 1, minus = 1 } = props;
    const [count, setCount] = useState(minimum);

    useEffect(() => {
        document.title = `${count} value`;
    }, [count]); // only runs when counter changes

    function add(n?: number) {
        const newValue = count + Math.abs(n || 1);
        setCount(newValue > maximum ? maximum : newValue);
    }

    function subtract(n?: number) {
        const newValue = count - Math.abs(n || 1);
        setCount(newValue < minimum ? minimum : newValue);
    }

    return (
        <div className={styles.counter}>
            <div className={styles.minimum}>{minimum}</div>
            <div className={styles.maximum}>{maximum}</div>
            <div className={styles.count}>{count}</div>
            <button
                className={styles.button}
                disabled={count <= minimum}
                onClick={() => {
                    subtract(minus);
                }}
            >
                -{minus}
            </button>
            <button
                className={styles.button}
                disabled={count >= maximum}
                onClick={() => {
                    add(plus);
                }}
            >
                +{plus}
            </button>
        </div>
    );
}

export default Counter;
