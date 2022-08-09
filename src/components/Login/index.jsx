import { useState } from "react"
import { useContext, useEffect } from "react"
import { authUser } from "../../actions/userActions"
import AppContext from "../../contexts/AppContext"
import useModal from "../../hooks/useModal"

const Login = props => {
    const { globalState, dispatch } = useContext(AppContext)
    const [errorMessage, setErrorMessage] = useState()
    const [successMessage, setSuccessMessage] = useState()

    const submitHandler = async values => {
        if (!!values.email && !!values.password) {
            const credentials = values
            const response = await authUser(dispatch, credentials)

            if (!response.body) {
                setErrorMessage(response.message)
            } else {
                setSuccessMessage("User logged in successfully")
                localStorage.setItem("user", globalState.user)
            }
        } else {
            setErrorMessage("Please check all the fields again and retry.")
        }
    }

    const data = {
        title: "Login to VideoFlix",
        labels: [
            {
                name: "email",
                title: "Enter registered email",
            },
            {
                name: "password",
                title: "Enter password",
            },
        ],
        submitHandler,
        // onCloseModal: () => {},
        errorMessage,
        successMessage,
    }

    const { Modal, openModal } = useModal()

    useEffect(() => {
        if (globalState.modal?.showLogin) openModal()
    }, [globalState.modal?.showLogin])

    return (
        <>
            <Modal {...data} />
        </>
    )
}

export default Login
