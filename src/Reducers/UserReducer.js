const initialState = {
    user_data: []
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LIST":
            console.log("user_data", action)
            return {
                ...state,
                user_data: action.payload
            }

        default:
            return state;
    }
}