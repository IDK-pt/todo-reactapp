function Todo({key, todo}){
    return(
        <div className='row'>
            <div className='col list-group-item' style={{textAlign:'justify'}}>{todo}</div>
            <div className='col col-lg-2' style={{padding:0, margin:0}}>
                <button className='btn btn-success' style={{width:'100%', height:'100%', borderRadius:0, borderColor:'black'}}>Done</button>
            </div>
        </div>
    );
}

export default Todo