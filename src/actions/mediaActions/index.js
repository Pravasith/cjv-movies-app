import api from "../../services/api"
import { API_URLS } from "../../services/routes"

export const getMovies = async dispatch => {
    let response

    try {
        response = await api.GET(API_URLS.MOVIES)
    } catch (error) {
        console.error(error)
    } finally {
        dispatch({
            type: "GET_MOVIES",
            payload: response,
        })
    }
}

export const getTvShows = async dispatch => {
    let response

    try {
        response = await api.GET(API_URLS.TV_SHOWS)
    } catch (error) {
        console.error(error)
    } finally {
        dispatch({
            type: "GET_TV_SHOWS",
            payload: response,
        })
    }
}

export const getFeaturedMedia = async (dispatch, type) => {
    let response

    try {
        response = await api.GET(
            type === "movies"
                ? API_URLS.FEATURED_MOVIES
                : API_URLS.FEATURED_TV_SHOWS
        )
    } catch (error) {
        console.error(error)
    } finally {
        dispatch({
            type:
                type === "movies"
                    ? "GET_FEATURED_MOVIES"
                    : "GET_FEATURED_TV_SHOWS",
            payload: response,
        })
    }
}
