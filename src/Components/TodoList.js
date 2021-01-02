import Todo from './Todo'
import {useState, useEffect} from 'react'
import AddTodo from './AddTodo'
import FlashAlert from './FlashAlert'

function TodoList(){

    const [todos, setTodos] = useState([])
    const [rerenderTrigger, setRerenderTrigger] = useState()
    const [flash, setFlash] = useState({})

    // Re render todos
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")))
    }, [rerenderTrigger])

    // Flash msg
    useEffect(() => {
        console.log('Flash up')
    }, [flash])

    // On startup
    useEffect(() => {
        setFlash({})
    }, [])

    return(
        <div className="mx-auto" style={{width:'30vw', textAlign:'jutify'}}>
            <FlashAlert severity={flash.severity} msg={flash.msg}/>
            <AddTodo getFlashQuery={(q) => setFlash(q)} getAddQuery={(q) => setRerenderTrigger(q)}/>
            <br></br> 
            {todos.map(todo => (
            <Todo key={todo.todo} todo={todo.todo || 'Error'}/>
            ))}
        </div> 
    );
}

export default TodoList