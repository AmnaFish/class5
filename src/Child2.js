import React, {useReducer} from "react";
import numbReducer from './numbReducer'
//Reducer: multi changes to a state: multi component
//use state is for perticular component
function Child2() {
    let [state, dispatch]= useReducer(numbReducer,52)
  return (
    <div>
      child 2 {state}
      <button onClick={()=>{dispatch({type:'INCREMENT', val:67});}}>Incrememnt</button>
      <button onClick={()=>{dispatch({type:'DECREMENT', val:34});}}>Decrememnt</button>
    </div>
  );
}

export default Child2;
