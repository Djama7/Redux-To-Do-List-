import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Action";


const AddTask = () => {
    const dispatch=useDispatch()
    const [description,setDescription]= useState('')
    const handleadd = () => {
        description === ('') ? alert ('mafama chay ') : dispatch (addTask({id:Math.random(), description , isDone:true }))
        setDescription('')
    }
    return (
        <>
        <div className='addd'>
        <input value={description} type='text' onChange={(e)=>setDescription(e.target.value)}/>
        <Button onClick={handleadd} variant="dark">Add</Button> 
        </div>
        
       </>
    )
}
export default AddTask