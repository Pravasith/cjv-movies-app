import backdropReducer from "./backdropReducer"
import mediaReducer from "./mediaReducer"
import userReducer from "./userReducer"

export const globalReducer = (state, action) => {
    return {
        media: mediaReducer(state.media, action),
        user: userReducer(state.user, action),
        backdrops: backdropReducer(state.backdrops, action),
    }
}