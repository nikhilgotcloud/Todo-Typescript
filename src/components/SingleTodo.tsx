import React, { useState,useRef,useEffect} from 'react'
import { Todo } from '../models/models'
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import { AiFillEdit } from "react-icons/ai"
import "./styles.css"




type Props = {
  
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
       
    
    const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string | undefined>(todo.todo);


    function handleDone(id: number) {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        )
    }



    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit =(e:React.FormEvent,id:number)=>{
        e.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
          );
          setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])
  
    

    return (
      
        <form
          onSubmit={(e) => handleEdit(e, todo.id)}  className='todos__single'>
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
          ) : todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
            <div>
                <span className="icon" onClick={()=>{
                    if(!edit && !todo.isDone){
                        setEdit(!edit)
                    }}
                }><BiEdit />
                </span>
                <span className="icon" onClick={() => { handleDelete(todo.id) }}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => { handleDone(todo.id) }}>
                    <AiFillEdit />
                </span>
            </div>

        </form>
        )}
        
              
  

export default SingleTodo