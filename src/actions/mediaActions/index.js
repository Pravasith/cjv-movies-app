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
            payload: response.body,
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
            payload: response.body,
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
            payload: response.body,
        })
    }
}

export const getDetailedMedia = async (dispatch, id) => {
    let response

    try {
        response = await api.GET(API_URLS.MEDIA + "/" + id)
    } catch (error) {
        console.error(error)
    } finally {
        dispatch({
            type: "GET_DETAILED_MEDIA",
            payload: response.body,
        })
    }
}

export const getSearchResults = async (dispatch, searchTerm) => {
    let response

    try {
        response = await api.GET(API_URLS.MEDIA + "?name=" + searchTerm)
    } catch (error) {
        console.error(error)
    } finally {
        dispatch({
            type: "GET_SEARCHED_MEDIA",
            payload: response.body,
        })
    }
}
