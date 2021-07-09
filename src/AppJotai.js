import React from 'react';
import { useAtom } from "jotai";
import { 
  count1Atom, 
  count4Atom, 
  store
} from "./stores/storeAtom.js";
import Button1 from "./components/Button1Jotai.js";
import Counter2 from "./components/Counter2Jotai.js";
import Counter3 from "./components/Counter3Jotai.js";
import "./App.css"

const App = () => {

  const [count1, setCount1] = useAtom(count1Atom);
  const [count4, setCount4] = useAtom(count4Atom);
  const increase1 = ()=> {
    setCount1(count1 + 1)
  };
  const increase4 = ()=> {
    setCount4(count4 + 4)
  };
  store.increase1 = increase1;
  store.increase4 = increase4;
  return (
    <>
      {console.log("rendering App")}
      <header>
        My Counts
      </header>
      <main>
        <div className="box">
          <h2>Child action to parent state (child - parent)</h2>
          Counter 1: {count1}
          &nbsp;
          <Button1 />
        </div>
        <div className="box">
          <h2>Child action/state (child - child)</h2>
          <Counter2 />
        </div>
        <div className="box">
          <h2>Child action/state and to parent state(child - child & parent)</h2>
          <Counter3 />
        </div>
        <div className="box">
          <h2>Inline action/state</h2>
          Counter 4: {count4}
          &nbsp;
          <button 
              type="button"
              onClick={()=>{increase4()}}
          >
              Increase Counter 4
          </button>
        </div>
      </main>
    </>
  );
}

export default App;