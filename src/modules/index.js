import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

//한프로젝트에 리듀서가 여러개일때 하나로 합쳐서 사용 => rootreducer 루트리듀서
//combinereducers( )

const rootReducer = combineReducers(
    {
        counter:counter,
        todos:todos
    }
    )
export default rootReducer