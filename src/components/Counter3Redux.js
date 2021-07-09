import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount3 } from '../stores/storeReducer';

const Counter = () => {

  const { count3 } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
        {console.log("rendering counter3")}
        Counter 3: {count3}
        &nbsp;
        <button 
            type="button"
            onClick={()=>{dispatch(increaseCount3(3))}}
        >
            Increase Counter 3
        </button>
    </div>
  );
}

export default Counter;
