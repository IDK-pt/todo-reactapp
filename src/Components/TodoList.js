import Todo from './Todo'
import {useState, useContext} from 'react'
import {TodoContext} from '../ContextApis/TodoContext'

function TodoList(){

    const [todos, setTodos] = useContext(TodoContext)

    return(
        <div className="mx-auto" style={{width:'30vw', textAlign:'jutify'}}>
            {todos.map(todo => (
            <Todo id={todo.todo} todo={todo.todo}/>
            ))}
        </div> 
    );
}

export default TodoList