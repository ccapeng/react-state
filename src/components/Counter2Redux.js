import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount2 } from '../stores/storeReducer';

const Counter = () => {

  const { count2 } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
        {console.log("rendering counter2")}
        Counter 2: {count2}
        &nbsp;
        <button 
            type="button"
            onClick={()=>{dispatch(increaseCount2(2))}}
        >
            Increase Counter 2
        </button>
    </div>
  );
}

export default React.memo(Counter);
//export default Counter;
