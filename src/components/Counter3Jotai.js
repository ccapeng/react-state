import React from "react";
import { useAtom } from "jotai";
import {
  count3Atom,
  store
} from "../stores/storeAtom.js";

const Counter = () => {

  const [count3, setCount3] = useAtom(count3Atom);

  return (
    <div>
        {console.log("rendering counter3")}
        Counter 3: {count3}
        &nbsp;
        <button 
            type="button"
            onClick={()=>{
              setCount3(count3 + 3);
              store.increase4();
            }}
        >
            Increase Counter 3
        </button>
    </div>
  );
}

export default React.memo(Counter);