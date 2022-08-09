const userReducer = (state, action) => {
    const { payload } = action

    switch (action.type) {
        case "ADD_NEW_USER":
            return {
                ...state,
                user: payload,
            }

        case "AUTH_USER":
            return {
                ...state,
                user: payload,
            }

        case "USER_SIGN_OUT":
            return {
                ...state,
                user: payload,
            }

        default:
            return state
    }
}

export default userReducer
