import React, { useState } from 'react';
const AddPart = ({passChanges}) => {
  const [title,setTitle]=useState('');
  const [importance,setImportance]=useState({value:''})
  const show=(e)=>{
    e.preventDefault();
    passChanges(title,importance);
  }
  return ( <form className='m-5'>
   <input onChange={(e)=>setTitle(e.target.value)} className='m-1'/>
   <br/>
   <label for="importance" className='m-1'>status :</label>
   <select value={value} name='importance' className='m-1' onChange={(e)=>setImportance(e.target.value)}>
     <option value="very important">very important</option>
     <option value="important">important</option>
     <option value="not important">not important</option>
   </select>
   <br/>
   <button onClick={show}>add to CheckList</button>
  </form> );
}
export default AddPart;