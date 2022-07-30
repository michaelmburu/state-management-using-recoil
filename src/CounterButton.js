import {useRecoilState, useRecoilValue} from 'recoil';
import { counterState } from './States/counterState';
import { incrementByState } from './States/incrementByState';
import { numberOfClicksSelector } from './Selectors/numberOfClicksSelector';

// Sharing recoil state using selectors. Return specific data eg in an array in a state
export const CounterButton = () => {
    const numberOfClicks = useRecoilValue(numberOfClicksSelector);
    const [clicksData, setClicksData] = useRecoilState(counterState);
    const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

    return (
        <>
            <p>You have clicked the button {numberOfClicks} times</p>
            <label>
                Increment By: 
                    <input value={incrementBy} onChange={e => setIncrementBy(Number(e.target.value))} type="number" />
            </label>
            <button onClick={() => setClicksData([...clicksData, {timestamp: Date.now(), amount: incrementBy}])}>Increment</button>
        </>
    )
}