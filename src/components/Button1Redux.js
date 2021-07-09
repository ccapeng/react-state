import React from "react";
import { useDispatch } from "react-redux";
import { increaseCount1 } from "../stores/storeReducer";

const Button = () => {

  const dispatch = useDispatch();

  return (
    <button 
        type="button"
        onClick={()=>{dispatch(increaseCount1(1))}}
    >
        {console.log("rendering button 1")}
        Increase Counter 1
    </button>
  );
}

export default React.memo(Button);
