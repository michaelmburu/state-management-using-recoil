import {useRecoilState} from 'recoil';
import { counterState } from './States/counterState';
import { incrementByState } from './States/incrementByState';

export const CounterButton = () => {
    const [numberOfClicks, setIncrementNumberOfClicks] = useRecoilState(counterState);
    const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

    return (
        <>
            <p>You have clicked the button {numberOfClicks} times</p>
            <label>
                Increment By: 
                    <input value={incrementBy} onChange={e => setIncrementBy(Number(e.target.value))} />
            </label>
            <button onClick={() => setIncrementNumberOfClicks(numberOfClicks + incrementBy)}>Increment</button>
        </>
    )
}