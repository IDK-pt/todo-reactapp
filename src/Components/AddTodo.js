import {useState} from 'react'

function AddTodo({getAddQuery, getFlashQuery}){

    const [newTodoInput, setNewTodoInput] = useState('')

    function addTodo() {
        getAddQuery(newTodoInput)
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