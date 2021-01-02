import {useState, useEffect} from 'react'

function AddTodo({getAddQuery, getFlashQuery}){

    const [newTodoInput, setNewTodoInput] = useState('')
    const [addTrigger, setAddTrigger] = useState(false)

    const [newFlashMsg, setNewFlashMsg] = useState({})
    const [flashTrigger, setFlashTrigger] = useState(false)

    useEffect(() => {
        getFlashQuery(newFlashMsg)
    }, [flashTrigger])

    function addTodo(){
        let todoList = JSON.parse(localStorage.getItem("todos"));
        if(newTodoInput === '' || newTodoInput === null || newTodoInput === undefined){
            setNewFlashMsg({severity: 'danger', msg:'Error when adding a new TODO', trigger: flashTrigger})
            setFlashTrigger(!flashTrigger)
        }else{
            setNewFlashMsg({severity: 'success', msg:`"${newTodoInput}" added`, trigger: flashTrigger})
            setFlashTrigger(!flashTrigger)
            todoList.push({todo: newTodoInput})
            localStorage.setItem("todos", JSON.stringify(todoList));
        }
        getAddQuery(addTrigger)
        setAddTrigger(!addTrigger)
    }

    return(
    <div className='row'>
        <input value={newTodoInput} onChange={(e)=>setNewTodoInput(e.target.value)} className='col list-group-item' placeholder='Add new TODO' style={{textAlign:'justify', fontSize:'1.5vw'}} />
        <div className='col col-lg-2' style={{padding:0, margin:0}}>
            <button onClick={addTodo} className='btn btn-warning fixed-btn' style={{ backgroundColor:'#fd7e14'}}>Add</button>
        </div>
    </div>
    )
}

export default AddTodo