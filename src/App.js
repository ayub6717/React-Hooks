import React from 'react';
import './App.css';
import CounterTwo from './Components/UseReducer/CounterTwo'; 
// import CounterOne from './Components/UseReducer/CounterOne';
// import ComponentA from './Components/UseContext/ComponentA';
// import DataFetching from './Components/DataFetching';
// import IntervalHookCounter from './Components/IntervalHookCounter';
// import HookCounter from './Components/HookCounter';
// import HookCounterFour from './Components/HookCounterFour';
// import HookCounterTree from './Components/HookCounterTree';
// import HookCounterTwo from './Components/HookCounterTwo';
// import HookUseEffect from './Components/HookUseEffect';
// import HookMouse from './Components/HookMouse';
// import MouseComntainer from './Components/MouseComntainer';

export const UserContext = React.createContext()
export const profileContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> <br/>
      <HookCounterTwo /> <br/>
      <HookCounterTree /> <br/>
      <HookCounterFour /> <br/>
      <HookUseEffect /> <br/>
      <HookMouse />
      <MouseComntainer />
      <IntervalHookCounter />
      <DataFetching /> 

      <UserContext.Provider value={"AYUB"}>
      <profileContext.Provider value={"something about user"}>
          <ComponentA />
        </profileContext.Provider>
      </UserContext.Provider> 
      <CounterOne />
      */}
      <CounterTwo />
    </div>
  );
}

export default App;
