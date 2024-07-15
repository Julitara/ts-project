/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid='counter-value'>value = {counterValue}</h1>
            <Button onClick={increment} data-testid='increment-btn'>increment</Button>
            <Button onClick={decrement} data-testid='decrement-btn'>decrement</Button>
        </div>
    );
};