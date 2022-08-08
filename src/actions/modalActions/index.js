export const showSignUpModal = async (dispatch, show) => {
    dispatch({ type: "SIGNUP_CLICKED", payload: show })
}

export const showLoginModal = async (dispatch, show) => {
    dispatch({ type: "LOGIN_CLICKED", payload: show })
}
