import React from "react";
import { connect } from 'react-redux';
import { increaseCount3 } from '../stores/storeReducer';

const Counter = (props) => {

  return (
    <div>
        {console.log("rendering counter3")}
        Counter 3: {props.count3}
        &nbsp;
        <button 
            type="button"
            onClick={()=>{props.increase(3)}}
        >
            Increase Counter 3
        </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count3: state.count3
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increase: count => {
      dispatch(increaseCount3(count))

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
