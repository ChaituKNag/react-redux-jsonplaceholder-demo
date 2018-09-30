
export const usersReducer = (state = {
    usersList: [],
    loaded: false
}, action) => {
    if(action.type === "ALL_USERS_RECEIVED") {
        return {
            ...state,
            usersList: action.payload,
            loaded: true
        }
    }

    return state;
}