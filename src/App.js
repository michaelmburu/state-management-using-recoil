import './App.css';
import { RecoilRoot } from 'recoil';
import { CounterButton } from './CounterButton';
import { DisplayCount } from './DisplayCount';

/*
  Recoil State Management
  1. Install Recoil
  2. Create Recoil States
  Concepts, Atoms - Individual values stored in states
  Selectors
   Get the the current state value
*/

function App() {
  return (
    //Keep track of all recoil states and allow components in the root access the recoil state values
   <RecoilRoot>
   
      <h1>State Management Using Recoil</h1>
      <DisplayCount />
      <CounterButton />
   </RecoilRoot>
  );
}

export default App;
