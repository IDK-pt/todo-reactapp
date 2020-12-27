import Todo from './Todo'
import {useState, useContext, useEffect} from 'react'
import {TodoContext} from '../ContextApis/TodoContext'
import AddTodo from './AddTodo'

function TodoList(){

    const [todos, setTodos] = useContext(TodoContext)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify([{todo: 'ola'}, {todo: 'adeus'}]))
    }, [])

    return(
        <div className="mx-auto" style={{width:'30vw', textAlign:'jutify'}}>
            {todos.map(todo => (
            <Todo key={todo.todo} todo={todo.todo}/>
            ))}
            <br></br>
            <AddTodo />
        </div> 
    );
}

export default TodoList