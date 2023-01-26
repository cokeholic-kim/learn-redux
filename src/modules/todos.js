//액션타입선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//액션 생성 함수
let nextId = 1
export const addTodo = (text) =>({
    type:ADD_TODO,
    todo:{id:nextId,text: text}
})
export const toggleTodo = (id)=>({
    type:TOGGLE_TODO,
    id:id
})

//초기상태값
//초기 상태는 배열이어도 되고,원시타입(숫자,불린,문자열) 객체도 가능하다.
const initialState = [
    // {
    //     id:1,
    //     text:"해야할일",
    //     done:false
    // }
]
//리듀서

export default function todos(state=initialState,action){
    switch(action.type){
        case ADD_TODO:
            return[
                ...state,
                action.todo
            ]
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? {...todo, done:!todo.done} : todo )
        default:
            return state
    }
}