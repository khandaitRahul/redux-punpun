const initialState = {
    product_data: [],
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCT_LIST":
            console.log("product_data", action)
            return {
                ...state,
                product_data: action.payload
            }

        default:
            return state
    }
}