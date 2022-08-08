import api from "../../services/api"
import { API_URLS } from "../../services/routes"

export const addUser = async (dispatch, user) => {
    let response

    try {
        response = await api.POST(API_URLS.USERS, user)
    } catch (error) {
        console.error(error)
    } finally {
        dispatch({
            type: "ADD_NEW_USER",
            payload: response,
        })
    }
}
