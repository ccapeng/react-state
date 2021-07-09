import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import Counter2 from "./components/Counter2Redux.js";
import Counter3 from "./components/Counter3Connect.js";
import Button1 from "./components/Button1Redux.js";
import { increaseCount4 } from './stores/storeReducer';
import "./App.css"

const App = () => {

  const { count1, count4 } = useSelector(state => {
    return state
  });
  console.log("count1/count4:", count1, count4);
  const dispatch = useDispatch();

  return (
    <>
      {console.log("rendering App")}
      <header className="App-header">
        My App
      </header>
      <main>
        <section>
          <div className="box">
            <h2>Child action to parent state (child - parent)</h2>
            {console.log("rendering counter1")}
            Counter 1: {count1}
            &nbsp;
            <Button1/>
          </div>
          <div className="box">
          <h2>Child action/state</h2>
            <Counter2 />
          </div>
          <div className="box">
            <h2>Child action/state and to parent state(child - child & parent)</h2>
            <Counter3 />
          </div>
          <div className="box">
            {console.log("rendering counter4 inline content")}
            <h2>Inline state</h2>
            Counter 4: {count4}
            <button 
                type="button"
                onClick={()=>{dispatch(increaseCount4(4))}}
            >
                Increase Counter 4
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;