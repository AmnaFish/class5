import React from 'react'
//default value 45
//context has provider(provides value to componetn tree) and consumer
const valueContext = React.createContext(45, ()=>{});

export default valueContext;