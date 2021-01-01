import {useState, useEffect} from 'react'

function AddTodo({getQuery}){

    const [newTodoInput, setNewTodoInput] = useState('')
    const [trigger, setTrigger] = useState(false)

    function addTodo(){
        let todoList = JSON.parse(localStorage.getItem("todos"));
        todoList.push({todo: newTodoInput})
        localStorage.setItem("todos", JSON.stringify(todoList));
        getQuery(trigger)
        setTrigger(!trigger)
    }

    return(
    <div className='row'>
        <input value={newTodoInput} onChange={(e)=>setNewTodoInput(e.target.value)} className='col list-group-item' placeholder='Add new TODO' style={{textAlign:'justify'}} />
        <div className='col col-lg-2' style={{padding:0, margin:0}}>
            <button onClick={addTodo} className='btn btn-warning' style={{width:'100%', height:'100%', borderRadius:0, borderColor:'black', backgroundColor:'#fd7e14'}}>Add</button>
        </div>
    </div>
    )
}

export default AddTodo