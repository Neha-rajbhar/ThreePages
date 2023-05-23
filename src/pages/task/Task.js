import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { todo } from '../atom/Atom';

function Task() {
  const [input, setInput]=useState("");
  let [task,setTask]=useRecoilState(todo);
  const [newInput, setNewInput]=useState("");
  const [show, setShow]=useState(false)

  function handleInput(e){
setInput(e.target.value);

  }

  function handleData(e){
e.preventDefault();
let newData=[...task,{id:Math.floor(Math.random(1)*100), name:input, isCompleted:false}]
// console.log(newData);
setTask(newData)
// console.log(task,"task");
setInput("")

  }

  function handleNewInput(e){
    setNewInput(e.target.value)
  }

  function handleDelete(id){
let data =task.filter((e)=> e.id!==id)
setTask(data)
  }

  function handleEdit(id){
setShow(!show)
// let previous=[...task]
// console.log(previous);
// let updated=previous.map((ele)=>{
//   if(ele.id===id){
//     return {...previous,name:newInput}
//   }
//   return previous;

  
// })
// console.log(previous,"updated");
    let newEdit=task.find((e)=> e.id===id)
    console.log(newEdit,"edit");
    
  }

  return (
    <div>
      <input type='text' value={input} onChange={handleInput}/>
      <button onClick={handleData}>Add</button>

      {task.map((ele,index)=>{
        return(
          <>
          <p key={ele.id}>{ele.name}</p><button onClick={()=>handleDelete(ele.id)}>Delete</button>


{show?

 <input key={ele.id} type='text' value={newInput} onChange={handleNewInput}/>
 :
 ""
}
         
          <button onClick={()=>handleEdit(ele.id)}>Edit</button>
          </>
        )
      })}
    </div>
  )
}

export default Task
