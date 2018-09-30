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