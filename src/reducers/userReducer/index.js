const userReducer = (state, action) => {
    const { payload } = action

    switch (action.type) {
        case "ADD_NEW_USER":
            return payload

        case "AUTH_USER":
            return payload

        case "USER_SIGN_OUT":
            return null

        default:
            return state
    }
}

export default userReducer
