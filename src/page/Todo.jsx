import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Context } from "../state/Context";
import {AiFillDelete} from "react-icons/ai"
import "./todo.css"
const getRandomColor=()=>{
  // Generate random values for red, green, and blue channels
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Create the RGB color string
  var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

  return color;
}
export const Todo = () => {
    const [todoTitle,setTodoTitle]=useState("");
    const [todoContent,setTodoContent]=useState("");
    const{task,dispatch}=useContext(Context);   
    const handleInput=(e)=>{
        e.preventDefault();
        e.target.name==='title'?setTodoTitle(e.target.value):setTodoContent(e.target.value);
      }
    
      const handleAdd=()=>{
        const newTask={
          "title":todoTitle,
          "content":todoContent,
          "color":getRandomColor()
        }
        dispatch({type:"ADD",payload:newTask})
        setTodoTitle("");
        setTodoContent("");
      }
    
      const deleteTask=(key)=>{
        dispatch({type:"REMOVE",payload:key})
      }
    
  return (
    <div className='Todo'>
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
          task?.map((task,key)=>{
            return(
              <>
              <div className="todo--task__container" key={key} style={{backgroundColor:task.color}}>
              <div className="todo--task__title">
                {task.length>10?task?.title.substring(0,10)+"...":task?.title}
                <AiFillDelete className="dltbtn"onClick={()=>{
                  deleteTask(key);
                }} />
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
