function Todo({todo, getRemoveQuery}){

    function deleteTodo(){
        getRemoveQuery(todo)
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