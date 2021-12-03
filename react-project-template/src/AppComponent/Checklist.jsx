import React, { useState } from 'react';
import uuid from 'uuid/dist/v1';
const Checklist = () => {
  const [check,useCheck]=useState([{work:'eating breakfast',importance:'A',id:uuid()},{work:'doing workout',importance:'B',id:uuid()},{work:'showering',importance:'c',id:uuid()}])
  return ( 
    <ul>
       {check.map(m=>{
         return<li>{m.id}</li>
       })}
    </ul>
   );
}
 
export default Checklist;