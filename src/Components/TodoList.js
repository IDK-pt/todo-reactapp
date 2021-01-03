import Todo from './Todo'
import {useState, useEffect} from 'react'
import AddTodo from './AddTodo'
import FlashAlert from './FlashAlert'

function TodoList(){

    const [todos, setTodos] = useState([])
    const [rerenderTrigger, setRerenderTrigger] = useState()

    const [flash, setFlash] = useState({})
    const [flashTrigger, setFlashTrigger] = useState(false)

    // Re render todos
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")) || [])
    }, [rerenderTrigger])

    // Flash msg
    useEffect(() => {
        console.log('Flash up')
    }, [flash])

    // On startup
    useEffect(() => {
        setFlash({})
    }, [])

    function addTodo(todo){
        if(todo === '' || todo === null || todo === undefined){
            setFlash({severity: 'danger', msg:'Error when adding a new TODO', trigger: flashTrigger})
            setFlashTrigger(!flashTrigger)
        }else{
            setFlash({severity: 'success', msg:`"${todo}" added`, trigger: flashTrigger})
            setFlashTrigger(!flashTrigger)
            let todoList = JSON.parse(localStorage.getItem("todos")) || [];
            todoList.push({todo: todo})
            localStorage.setItem("todos", JSON.stringify(todoList));
        }
        setRerenderTrigger(!rerenderTrigger)
    }

    function deleteTodo(todo) {
        let todoList = JSON.parse(localStorage.getItem("todos")) || [];
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].todo === todo){
                todoList.splice(i, 1)
            }
        }
        localStorage.setItem('todos', JSON.stringify(todoList))
        setRerenderTrigger(!rerenderTrigger)
        setFlash({severity: 'primary', msg:`"${todo}" completed!`, trigger: flashTrigger})
        setFlashTrigger(!flashTrigger)
    }

    return(
        <div className="mx-auto" style={{width:'30vw', textAlign:'jutify'}}>
            <AddTodo getFlashQuery={(q) => setFlash(q)} getAddQuery={(q) => addTodo(q)}/>
            <br></br> 
            {<FlashAlert severity={flash.severity} msg={flash.msg} change={flash.trigger}/>}
            <br></br>
            {todos.length ?
                todos.map(todo => (
                <Todo key={todo.todo || 'nan'} todo={todo.todo || 'Error'} getRemoveQuery={(q) => deleteTodo(q)} />
                ))
                : (
                    <div className='row no-todos'>
                        <div className='col list-group-item' style={{textAlign:'center', fontSize:'1.5vw'}}>No TODOs found</div>
                    </div>
                )
            }
        </div> 
    );
}

export default TodoList