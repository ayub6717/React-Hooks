import React from 'react';
import './App.css';
import ClassTimer from './Components/UseRef/ClassTimer';
import FocusInput from './Components/UseRef/FocusInput';
import HookTimer from './Components/UseRef/HookTimer';
// import ComponentA from './Components/UseReducer/ComponentA';
// import ComponentB from './Components/UseReducer/ComponentB';
// import DataFetching from './Components/UseReducer/DataFetching';
// import Callback from './Components/UseReducer/UseCallback_With_UseMemo';
// import CounterThree from './CounterThree';
// import CounterTwo from './Components/UseReducer/CounterTwo'; 
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
// export const UserContext = React.createContext()
// export const profileContext = React.createContext()

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// }

// export const CountContext = React.createContext()

function App() {

  // const [count, dispatch] = useReducer(reducer, initialState);

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
      <CounterTwo />
      <CounterThree />
      <CountContext.Provider value = {{countValue: count, countDispatch: dispatch}} >
        <ComponentA />
        <ComponentB />
      </CountContext.Provider>
      <DataFetching />
      <Callback />
      */}

      <FocusInput />
      <ClassTimer />
      <HookTimer />
  


    </div>
  );
}

export default App;
