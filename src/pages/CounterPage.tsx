import React from 'react';
import Counter from '../components/Counter/Counter';
import { CounterRedux } from '../components/CounterRedux/CounterRedux';

export default () => {
    return (
        <>
            <section>
                <h2>Counter without props</h2>
                <Counter />
            </section>
            <section>
                <h2>Counter with props</h2>
                <Counter minimum={-20} maximum={20} minus={3} plus={3} />
            </section>
            <section>
                <h2>Redux counter</h2>
                <CounterRedux />
            </section>
        </>
    );
};
