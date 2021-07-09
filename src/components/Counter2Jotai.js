import React from "react";
import { useAtom } from "jotai";
import { count2Atom } from "../stores/storeAtom.js";

const Counter = () => {

  const [count2, setCount2] = useAtom(count2Atom);

  return (
    <div>
        {console.log("rendering counter2")}
        Counter 2: {count2}
        &nbsp;
        <button 
            type="button"
            onClick={()=>{setCount2(count2+2)}}
        >
            Increase Counter 2
        </button>
    </div>
  );
}

export default React.memo(Counter);
