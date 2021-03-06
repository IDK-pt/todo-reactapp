import './App.css';
import TodoList from './Components/TodoList'

function App() {

  return (
    <div className='vertical-center App'>
      <div className="card-transparent mx-auto card-mod" style={{marginTop:'30px',marginBottom:'30px'}}>
        <div className="card-boy card-body-mod img-rounded p-5" style={{backgroundColor: 'rgba(0,0,0, 0.03)'}}>
          <h1 className='text-white display-1'>Todo List</h1>
          <br></br>
          <hr></hr>
          <br></br>
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
