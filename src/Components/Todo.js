function Todo({key, todo}){
    return(
        <div className='row'>
            <div className='col list-group-item' style={{textAlign:'justify', fontSize:'20px'}}>{todo}</div>
            <div className='col col-lg-2' style={{padding:0, margin:0}}>
                <button className='btn btn-success fixed-btn'>Done</button>
            </div>
        </div>
    );
}

export default Todo