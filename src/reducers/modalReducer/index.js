const modalReducer = (state, action) => {
    switch (action.type) {
        case "SHOW_LOGIN":
            return {
                ...state,
                showLogin: action.payload,
            }

        case "SHOW_SIGNUP":
            return {
                ...state,
                showSignUp: action.payload,
            }

        default:
            return state
    }
}

export default modalReducer
