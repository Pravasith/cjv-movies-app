import api from "../../services/api"
import { API_URLS } from "../../services/routes"

export const getBackdrops = async dispatch => {
    let response

    try {
        response = await api.GET(API_URLS.BACKDROPS)
    } catch (error) {
        console.error(error)
    } finally {
        dispatch({
            type: "GET_BACKDROPS",
            payload: response,
        })
    }
}
