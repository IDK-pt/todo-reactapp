import {useState} from 'react'

function Todo({todo, getRemoveQuery}){

    const [removeTodoTrigger, setRemoveTodoTrigger] = useState(false)

    function deleteTodo(){
        let todoList = JSON.parse(localStorage.getItem("todos")) || [];
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].todo === todo){
                todoList.splice(i, 1)
            }
        }
        getRemoveQuery(todo)
        localStorage.setItem('todos', JSON.stringify(todoList))
        getRemoveQuery(removeTodoTrigger)
        setRemoveTodoTrigger(!removeTodoTrigger)
    }

    return(
        <div className='row'>
            <div className='col list-group-item' style={{textAlign:'justify', fontSize:'1.5vw'}}>{todo}</div>
            <div className='col col-lg-2' style={{padding:0, margin:0}}>
                <button onClick={deleteTodo} className='btn btn-success fixed-btn'>Done</button>
            </div>
        </div>
    );
}

export default Todo