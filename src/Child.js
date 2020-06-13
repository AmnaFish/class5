import valueContext from './valueContext'
import React, {useContext } from "react";

function Child(props) {
  let value = useContext(valueContext)
  return (
    <div>
      Child number {value[0]}
      <button onClick={()=> {value[1](++value[0])}}> update </button>
    </div>
  );
}

export default Child;
