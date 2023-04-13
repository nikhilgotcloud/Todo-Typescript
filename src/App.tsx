import React, { useState } from 'react';

import './App.css';
import InputField from './components/InputField';
import { Todo } from './models/models';
import TodoList from './components/TodoList';


const App:React.FC=()=> {                                    ///class component? ,React props 
  const[todo,setTodo]=useState<string>("");
  // console.log(todo)

  const[todos, setTodos]=useState<Todo[]>([]);
  

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos , { id:Date.now(),todo , isDone:false}]);
      setTodo("");
    }
    
  };
  // console.log(todos)

  


  return (
   
    <div className='App'>
      <span className="heading">Todo</span>
      
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <div className="space"></div>
      {/* {todos.map((t)=>(
        <li>{t.todo}</li>
      ))} */}

      <TodoList todos={todos}
          setTodos={setTodos}
          />
      </div>
    
  );
}

export default App;
