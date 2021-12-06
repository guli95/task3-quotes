import React from 'react';

const Quoete=(props)=>{
    const{index, quotesHistory, error}=props
    if(error){
      return <h1>There is no previous quote. Generate a new one</h1>
    }
    else if(index===0 && error===false){
      return <h1>Generate a quote</h1>
    }
    else if(index>0){
      return(
        <p>Quote for your day: <span>"{quotesHistory[index-1].quote}" ~{quotesHistory[index-1].author}</span></p>
      )
    }
  }
export default Quoete