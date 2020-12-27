import { render } from "@testing-library/react"

function AddTodo(){
    return(
    <div className='row'>
        <input className='col list-group-item' placeholder='Add new TODO' style={{textAlign:'justify'}} />
        <div className='col col-lg-2' style={{padding:0, margin:0}}>
            <button className='btn btn-primary' style={{width:'100%', height:'100%', borderRadius:0, borderColor:'black'}}>Add</button>
        </div>
    </div>
    )
}

export default AddTodo