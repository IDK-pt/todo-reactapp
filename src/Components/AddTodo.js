import {useState, useEffect} from 'react'

function AddTodo({getAddQuery, getFlashQuery}){

    const [newTodoInput, setNewTodoInput] = useState('')
    const [trigger, setTrigger] = useState(false)

    const [newFlashMsg, setNewFlashMsg] = useState({})

    useEffect(() => {
        getFlashQuery(newFlashMsg)
    }, [newFlashMsg])

    function addTodo(){
        let todoList = JSON.parse(localStorage.getItem("todos"));
        if(newTodoInput === '' || newTodoInput === null || newTodoInput === undefined){
            setNewFlashMsg({severity: 'danger', msg:'Error when adding a new TODO'})
        }else{
            setNewFlashMsg({severity: 'success', msg:'New TODO added'})
            todoList.push({todo: newTodoInput})
            localStorage.setItem("todos", JSON.stringify(todoList));
        }
        getAddQuery(trigger)
        setTrigger(!trigger)
    }

    return(
    <div className='row'>
        <input value={newTodoInput} onChange={(e)=>setNewTodoInput(e.target.value)} className='col list-group-item' placeholder='Add new TODO' style={{textAlign:'justify'}} />
        <div className='col col-lg-2' style={{padding:0, margin:0}}>
            <button onClick={addTodo} className='btn btn-warning fixed-btn' style={{ backgroundColor:'#fd7e14'}}>Add</button>
        </div>
    </div>
    )
}

export default AddTodo