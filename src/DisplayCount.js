import {useRecoilValue} from 'recoil';
import { numberOfClicksSelector } from './Selectors/numberOfClicksSelector';


// CounterButton component is able to share numberOfClicks with DisplayCount 
export const DisplayCount = () => {
    const clicksData = useRecoilValue(numberOfClicksSelector);

    return (
        <h2>Number of clicks: {clicksData}</h2>
    )
}