import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterFour from './Components/HookCounterFour';
import HookCounterTree from './Components/HookCounterTree';
import HookCounterTwo from './Components/HookCounterTwo';
import HookUseEffect from './Components/HookUseEffect';

function App() {
  return (
    <div className="App">
      <HookCounter /> <br/>
      <HookCounterTwo /> <br/>
      <HookCounterTree /> <br/>
      <HookCounterFour /> <br/>
      <HookUseEffect />
    </div>
  );
}

export default App;
