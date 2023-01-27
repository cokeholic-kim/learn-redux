import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

const TodosContainer = () => {
    //useSelector로 상태에서 필요한값 받아오기
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();
    
    const onCreate = (text) => dispatch(addTodo(text)) 
    /*
    addTodo = (text) =>({
        type:ADD_TODO,
        todo:{id:nextId,text: text}
    }) 
    */
   const onToggle = (id) => dispatch(toggleTodo(id))
   /*
   toggleTodo = (id)=>({
        type:TOGGLE_TODO,
        id:id
    })
   */  
    return (
        <div>
            <Todos todos={todos} onCreate={onCreate} onToggle={onToggle}/>
        </div>
    );
};

export default TodosContainer;