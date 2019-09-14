
export const usersReducer = (state = {
    usersList: [],
    loaded: false,
    currentUser: null
}, action) => {
    if(action.type === "ALL_USERS_RECEIVED") {
        return {
            ...state,
            usersList: action.payload,
            loaded: true
        }
    }

    if(action.type === "UPDATE_CURRENT_USER") {
        return {
            ...state,
            currentUser: action.payload
        }
    }

    return state;
}