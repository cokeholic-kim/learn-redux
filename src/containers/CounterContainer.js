import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase,setDIFF } from '../modules/counter';

const CounterContainer = () => {
    //useSelector() 는 리덕스스토어의 상태를 조회하는 hook이다

    const { number,diff } = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    // 각 액션들을 디스패치 하는 함수
    const onIncrease = ()=> dispatch(increase());
    const onDecrease = ()=>dispatch(decrease());
    const onsetDIFF = (diff) => dispatch(setDIFF(diff));
    return (
        <Counter number={number} diff={diff} onIncrease={onIncrease} onDecrease={onDecrease} onsetDIFF={onsetDIFF}/>
    );
};

export default CounterContainer;