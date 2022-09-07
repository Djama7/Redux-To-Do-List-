
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
   <div className='App'>
    <div className='titre'>
    <img className='img' src="/todo.png" alt="no found" />
    <h2>TO DO LIST</h2>
    <br/>
    <br/>
    </div>
    <ListTask/>
    <br/>
    <br/>

    <AddTask/>


   </div>
   
  );
}

export default App;
