import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {

    test('Counter test: render', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('Counter test: increment', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        });
        fireEvent.click(screen.getByTestId('increment-btn'));

        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('Counter test: decrement', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        });

        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
 
});