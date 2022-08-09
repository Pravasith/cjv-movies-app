import api from "../../services/api"
import { API_URLS } from "../../services/routes"

export const addUser = async (dispatch, user) => {
    let response

    try {
        response = await api.POST(API_URLS.USERS, user)
        dispatch({
            type: "ADD_NEW_USER",
            payload: response.body,
        })
    } catch (error) {
        console.error(error)
    } finally {
        return response
    }
}

export const authUser = async (dispatch, user) => {
    let response

    try {
        response = await api.POST(API_URLS.AUTH_USER, user)
        dispatch({
            type: "AUTH_USER",
            payload: response.body,
        })
    } catch (error) {
        console.error(error.response.data)
        response = error.response.data
    } finally {
        return response
    }
}

export const userSignOut = dispatch => {
    localStorage.removeItem("user")
    dispatch({
        type: "USER_SIGN_OUT",
        payload: null,
    })
}
