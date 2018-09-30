export const getAllUsersAction = () => {
    return dispatch => (
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(resp => resp.json())
        .then(users => dispatch({
            type: 'ALL_USERS_RECEIVED',
            payload: users
        }))
    )
}

export const updateCurrentUserAction = (user) => ({
    type: 'UPDATE_CURRENT_USER',
    payload: user
});

export const getCurrentUserAction = () => ({
    type: 'GET_CURRENT_USER'
});