import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Context } from "./state/Context";
function App() {
const [todoTitle,setTodoTitle]=useState("");
const [todoContent,setTodoContent]=useState("");
const{task,dispatch}=useContext(Context);

useEffect(()=>{
   localStorage.setItem("Tasks",JSON.stringify(task));
},[task])

  const handleInput=(e)=>{
    e.preventDefault();
    e.target.name==='title'?setTodoTitle(e.target.value):setTodoContent(e.target.value);
  }
  const handleAdd=()=>{
    const newTask={
      "title":todoTitle,
      "content":todoContent,
    }
    dispatch({type:"ADD",payload:newTask})
    setTodoTitle("");
    setTodoContent("");
  }
  const deleteTask=(key)=>{
    dispatch({type:"REMOVE",payload:key})
  }
  return (
    <div className="App">
      <header>
        <h1 className="todo--header__text">TODO List</h1>
      </header>

      <section>
        <div className="inputContainer">
      
          <input type="text" name="title" className="todo--title"value={todoTitle} placeholder="task"onChange={(e)=>handleInput(e)}/>
          
          <input type="text" name="content"className="todo--content"value={todoContent}placeholder="write task"onChange={(e)=>handleInput(e)}/>
          
        </div>
        <button className="todo--btn__add"  onClick={handleAdd} disabled={(todoTitle ==="" || todoContent==="")?true:false}>Create Task</button>
      </section>

      <main>
        {
          task.map((task,key)=>{
            return(
              <>
              <div className="todo--task__container" key={key} style={{backgroundColor:"#F95335"}}>
              <div className="todo--task__title">
                {task?.title}
                <button className="dltbtn"onClick={()=>{
                  deleteTask(key);
                }} >Delete</button>
              </div>
                <div className="todo--task__content">
                  {task?.content}
                </div>
              </div>
              </>
            )
          }) 
        }
      </main>
    </div>
  )
}

export default App
