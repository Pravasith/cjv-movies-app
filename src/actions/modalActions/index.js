export const showSignUpModal = async dispatch => {
    dispatch({ type: "SHOW_SIGNUP", payload: true })
}

export const showLoginModal = async dispatch => {
    dispatch({ type: "SHOW_LOGIN", payload: true })
}
