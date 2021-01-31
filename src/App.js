import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterFour from './Components/HookCounterFour';
import HookCounterTree from './Components/HookCounterTree';
import HookCounterTwo from './Components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <HookCounter /> <br/>
      <HookCounterTwo /> <br/>
      <HookCounterTree /> <br/>
      <HookCounterFour />
    </div>
  );
}

export default App;
