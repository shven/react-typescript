import React, { useState } from 'react';
import styles from './Counter.module.css';

interface TCounter {
    minimum?: number;
    maximum?: number;
    plus?: number;
    minus?: number;
}

function Counter(props: TCounter) {
    const { minimum = 0, maximum = 10, plus = 1, minus = 1 } = props;
    const [counter, setCounter] = useState(minimum);

    function add(n?: number) {
        const newValue = counter + Math.abs(n || 1);
        setCounter(newValue > maximum ? maximum : newValue);
    }

    function subtract(n?: number) {
        const newValue = counter - Math.abs(n || 1);
        setCounter(newValue < minimum ? minimum : newValue);
    }

    return (
        <div className={styles.counter}>
            <div className={styles.minimum}>{minimum}</div>
            <div className={styles.maximum}>{maximum}</div>
            <div className={styles.count}>{counter}</div>
            <button
                className={styles.button}
                disabled={counter <= minimum}
                onClick={() => {
                    subtract(minus);
                }}
            >
                -{minus}
            </button>
            <button
                className={styles.button}
                disabled={counter >= maximum}
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
