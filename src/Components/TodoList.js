import Todo from './Todo'
import {useState, useEffect} from 'react'
import {TodoContext} from '../ContextApis/TodoContext'
import AddTodo from './AddTodo'

function TodoList(){

    const [todos, setTodos] = useState([])
    const [addTodo, setAddTodo] = useState()

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")))
    }, [addTodo])

    return(
        <div className="mx-auto" style={{width:'30vw', textAlign:'jutify'}}>
            <AddTodo getQuery={(q) => setAddTodo(q)}/>
            <br></br>    
            {todos.map(todo => (
            <Todo key={todo.todo} todo={todo.todo || 'No txt'}/>
            ))}
               
        </div> 
    );
}

export default TodoList