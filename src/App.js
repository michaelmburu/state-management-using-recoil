import './App.css';
import { RecoilRoot } from 'recoil';
import { CounterButton } from './CounterButton';

/*
  Recoil State Management
  1. Install Recoil
  2. Create Recoil States
  Concepts, Atoms - Individual values stored in states
  Selectors
*/

function App() {
  return (
    //Keep track of all recoil states and allow components in the root access the recoil state values
   <RecoilRoot>
      <h1>Recoil State Management</h1>
      <CounterButton />
   </RecoilRoot>
  );
}

export default App;
