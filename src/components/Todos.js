import React, { useState } from 'react';
import Todolist from './Todolist';

const Todos = ({onCreate,onToggle,todos}) => {
    const [text,setText] = useState("")
    const onChange = (e) =>setText(e.target.value)
    const onClick = () =>{
        onCreate(text);
        setText('');
    }
    return (
        <div>
            <div>
                <input value={text} onChange={onChange}></input>
                <button onClick={onClick}>등록</button> 
            </div>
                <Todolist onToggle={onToggle} todos={todos}/>
        </div>
    );
};

export default Todos;