import React from "react";
import { store } from "../stores/storeAtom.js";

const Button = () => {
  return (
    <button 
        type="button"
        onClick={()=>{store.increase1()}}
    >
        {console.log("rendering button 1")}
        Increase Counter 1
    </button>
  );
}

export default React.memo(Button);
