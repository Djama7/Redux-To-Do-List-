import Task from "./Task"
import { useSelector } from "react-redux"
import {ButtonGroup,Button} from 'react-bootstrap';
import { useState } from "react";


const ListTask = () => {
    const tasks= useSelector (state=>state.tasks)
    const [filterT,setFilterT] = useState ('all')
    return (
        <div className="espace">
            <div className="button">
            <ButtonGroup aria-label="Basic example">
      <Button onClick={()=>setFilterT('all')} variant="secondary">ALL</Button>
      <Button onClick={()=>setFilterT('done')} variant="secondary">Done</Button>
      <Button onClick={()=>setFilterT('undone')} variant="secondary">UnDone</Button>
    </ButtonGroup>

            </div>
        { 
            filterT == 'all'?
            tasks.map(task => <Task task={task}/>)
            :
            filterT == 'done' ?
            tasks.filter(task => task.isDone ==true).map(task => <Task task={task}/>)
            :
            tasks.filter (task =>task.isDone==false ).map (task => <Task task={task}/> )
            

        }
        
        
    </div>
    )
}
export default ListTask