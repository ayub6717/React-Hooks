import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterTree from './Components/HookCounterTree';
import HookCounterTwo from './Components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <HookCounter /> <br/>
      <HookCounterTwo /> <br/>
      <HookCounterTree />
    </div>
  );
}

export default App;
