import { editTask } from "../Redux/Action"
import { useDispatch } from "react-redux/es/exports"
import { Button } from "react-bootstrap"
const Task = ({task}) => {
    const dispatch=useDispatch ()
    return (
        <>
        <div className="tandhim">
        <h4>{task.description}</h4>
        <Button onClick={()=>dispatch(editTask(task.id)) } className="btn" variant="secondary">Edit</Button>
        <h6>{task.isDone?'true': 'false'}</h6>
        </div>

        
        </>

    )
}
export default Task