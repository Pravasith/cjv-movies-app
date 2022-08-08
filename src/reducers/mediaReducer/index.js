export const mediaReducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIES":
            return {
                ...state,
                movies: action.payload,
            }

        case "GET_TV_SHOWS":
            return {
                ...state,
                tvShows: action.payload,
            }

        case "GET_FEATURED_MOVIES":
            return {
                ...state,
                featuredMovies: action.payload,
            }

        case "GET_FEATURED_TV_SHOWS":
            return {
                ...state,
                featuredTvShows: action.payload,
            }

        default:
            return state
    }
}

export default mediaReducer
