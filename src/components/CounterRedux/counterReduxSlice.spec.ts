import counterReduxSlice, { CounterState, increment, decrement, incrementByAmount } from './counterReduxSlice';

describe('counter reducer', () => {
    const initialState: CounterState = {
        value: 3,
        status: 'idle'
    };

    it('should handle initial state', () => {
        expect(counterReduxSlice.reducer(undefined, { type: 'unknown' })).toEqual({
            value: 0,
            status: 'idle'
        });
    });

    it('should handle increment', () => {
        const actual = counterReduxSlice.reducer(initialState, increment());
        expect(actual.value).toEqual(4);
    });

    it('should handle decrement', () => {
        const actual = counterReduxSlice.reducer(initialState, decrement());
        expect(actual.value).toEqual(2);
    });

    it('should handle incrementByAmount', () => {
        const actual = counterReduxSlice.reducer(initialState, incrementByAmount(2));
        expect(actual.value).toEqual(5);
    });
});
