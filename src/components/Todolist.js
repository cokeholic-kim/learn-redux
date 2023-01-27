import React from 'react';

const Todolist = ({todos,onToggle}) => {
    return (
        <div>
            <ul>
                {todos.map(todo => <li key={todo.id} 
                onClick={()=>onToggle(todo.id)} 
                style={{textDecoration: todo.done ? 'line-through':'none'}}>
                    {todo.text}
                </li>)}
            </ul>
        </div>
    );
};

export default Todolist;