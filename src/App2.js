import { useEffect, useState } from "react";
import Counter1 from "./components/Counter1.js";
import Counter2 from "./components/Counter2.js";
import Button1 from "./components/Button1.js";
import Button2 from "./components/Button2.js";

const App = () => {

  const initVal = 0;
  const [count3, setCount3] = useState(initVal);
  const [count4, setCount4] = useState(initVal);

  return (
    <>
      {console.log("rendering App")}
      <header className="App-header">
        My App
      </header>
      <main>
        <section>
          <Counter1 />
          <br/>
          <Counter2 />
          <br/>
        </section>
        <section>
          <div>
            {console.log("rendering counter3")}
            Counter 3: {count3}
            &nbsp;
            <button 
                type="button"
                onClick={()=>{setCount3(count3+3)}}
            >
                Increase Counter 3
            </button>
          </div>
          <br/>
        </section>

        <section>
          <div>
            {console.log("rendering counter4")}
            Counter 4: {count4}
            &nbsp;
            <button 
                type="button"
                onClick={()=>{setCount4(count4+4)}}
            >
                Increase Counter 4
            </button>
          </div>
        </section>
      </main>
      <footer>
        <hr/>
        Footer
      </footer>
    </>
  );
}

export default App;
