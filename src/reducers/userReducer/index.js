export const userReducer = (state, action) => {
    const { payload } = action
    switch (action.type) {
        case "USER_LOGGED_IN":
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    fullName: payload.fullName,
                },
            }
        default:
            return state
    }
}

export default userReducer
