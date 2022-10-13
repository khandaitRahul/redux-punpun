import axios from "axios";

export const getProductAction = () => dispatch => {
    axios.get("https://fakestoreapi.com/products")
        .then(res => {
            dispatch({
                type: "PRODUCT_LIST",
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}


export const getUserAction = () => dispatch => {
    axios.get("https://fakestoreapi.com/users")
        .then(res => {
            dispatch({
                type: "USER_LIST",
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
}