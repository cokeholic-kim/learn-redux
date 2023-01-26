import React from 'react';

const Counter = ({number,diff,onIncrease,onDecrease,onsetDIFF}) => {
    const onChange = (e)=>{
        onsetDIFF(Number(e.target.value)) //(diff)=>({type:SET_DIFF,diff});
    }
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange}/>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>

            </div>
        </div>
    );
};

export default Counter;