import {ADDTASK,EDITTASK} from "./ActionType"

const initialstate  = {
    tasks : [
        {
            description : 'Glory Glory Man united ',
            isDone : true,
            id : Math.random() 
        } ,
        {
            description : 'Ce qui est incompréhensible, c est que le monde soit compréhensible' ,
            isDone : false, 
            id : Math.random ()
        },
        {
            description : 'Il n y a pas de question idiote, seulement une réponse idiote',
            isDone : true ,
            id : Math.random ()
        },
        {
            description : 'Un problème sans solution est un problème mal posé',
            idDone : false,
            id : Math.random ()
        },
        
    ]
}

const Reducer = (state=initialstate,action) => {
    switch (action.type) {
    case ADDTASK : return { ...state,tasks:[...state.tasks,action.payload]}
    case EDITTASK : return {...state,tasks:state.tasks.map(task=>task.id==action.payload ? {...task,isDone:!task.isDone}: task)}

        default :return state ; 

    }
}
export default Reducer