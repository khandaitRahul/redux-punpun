import { UserReducer } from "./UserReducer"
import { ProductReducer } from "./ProductReducer"
import { combineReducers } from "redux"



export const RootReducer = combineReducers({
    Product: ProductReducer,
    User: UserReducer
});


