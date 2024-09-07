/* eslint-disable i18next/no-literal-string */
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {
    const counterValue = useCounterValue();
    const { decrement, increment, add } = useCounterActions();

    return (
        <div>
            <h1 data-testid='counter-value'>value = {counterValue}</h1>
            <Button onClick={() => increment()} data-testid='increment-btn'>increment</Button>
            <Button onClick={() => decrement()} data-testid='decrement-btn'>decrement</Button>
            <Button onClick={() => add(5)} data-testid='decrement-btn'>add 5</Button>
        </div>
    );
};