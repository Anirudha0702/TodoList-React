import { useState } from 'react'
import './App.css'
function App() {
  const [todoTitle,setTodoTitle]=useState("");
  const [todoContent,setTodoContent]=useState("");
  const [todoList,setTodoList]=useState([]);
  const handleInput=(e)=>{
    e.preventDefault();
    e.target.name==='title'?setTodoTitle(e.target.value):setTodoContent(e.target.value);
  }
  const handleAdd=()=>{
    const newTask={
      "title":todoTitle,
      "content":todoContent
    }
    setTodoList([...todoList,newTask]);
    setTodoTitle("");
    setTodoContent("");
  }
  const deleteTask=(key)=>{
    const array=[...todoList];
    array.splice(key,1);
    setTodoList(array);
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
        <button className="todo--btn__add" onClick={handleAdd}>Create Task</button>
      </section>

      <main>
        {
          todoList.map((task,key)=>{
            return(
              <>
              <div className="todo--task__container" key={key}>
              <div className="todo--task__title">
                {task.title}
                <button className="dltbtn"onClick={()=>{
                  deleteTask(key);
                }}>Delete</button>
              </div>
              <div className="todo--task__content">
                {task.content}
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
