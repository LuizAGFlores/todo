import { useEffect, useState } from "react";
import { Task } from "../Task/Task";
import { StyledList } from "./style";
import { MagicMotion } from "react-magic-motion";

export function List (){

    const [taskList, setTaskList] = useState(localStorage.getItem('taskList')?JSON.parse(localStorage.getItem('taskList')):[]);
    const [newTask , setNewTask] = useState('');


    function addTask(e){
//        alert('ok!!!');
       // console.log(e);
        e.preventDefault(); // Prevenir a ação padrão no formulário

        setTaskList([{id:new Date().getTime(),title:newTask},...taskList]);
        setNewTask('');
    }


    function removeTask(id){
        //        alert('ok!!!');
        //    console.log(`Tarefa ${id} removida com sucesso`);
        setTaskList(taskList.filter(task=>(task.id !== id)) );
        
    }
    
    
    useEffect(()=>{
        localStorage.setItem('taskList',JSON.stringify(taskList));
        },[taskList]   
    )

    return (
        <MagicMotion transition={{type:'spring', bounce: 0.5, duration:1, delay:0.2}}>

            <StyledList>

                <form onSubmit={addTask}>
                    <input type="text" placeholder="Digite sua tarefa" value = {newTask} onChange={(e)=>setNewTask(e.target.value)} />
                    <button type="submit" onClick={addTask} disabled={newTask === ''} >Criar</button>
                </form>

                {
                    taskList.map((task) =>(
                        <Task title={task.title} id={task.id} key={task.id} onRemove={removeTask}/>
                    ))

                }
                            
            </StyledList>
        </MagicMotion>
    )
}