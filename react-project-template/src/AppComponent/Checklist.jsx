import React, { useState } from 'react';
import uuid from 'uuid/dist/v1';
import AddPart from './AddPart';
const Checklist = () => {
  const [check,setCheck]=useState([{work:'eating breakfast',importance:'very important',id:uuid()},{work:'doing workout',importance:'important',id:uuid()},{work:'showering',importance:'not important',id:uuid()}])
  const passChanges=(addedTitle,addedImportance)=>{
    setCheck([...check,{work:addedTitle,importance:addedImportance,id:uuid()}])
  }
  return ( <>
    <ul>
       {check.map(m=>{
         return<li className="mb-3"><strong>{m.work}</strong> <br/> priority <strong>{m.importance}</strong> </li>
       })}
    </ul>
      <AddPart passChanges={passChanges}/>
    </>
   );
}
 
export default Checklist;