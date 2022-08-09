import { useState } from "react"
import { useContext, useEffect } from "react"
import { showSignUpModal } from "../../actions/modalActions"
import { addUser } from "../../actions/userActions"
import AppContext from "../../contexts/AppContext"
import useModal from "../../hooks/useModal"

const Register = props => {
    const { globalState, dispatch } = useContext(AppContext)
    const [errorMessage, setErrorMessage] = useState()
    const [successMessage, setSuccessMessage] = useState()

    const submitHandler = values => {
        if (
            !!values.firstName &&
            !!values.lastName &&
            !!values.email &&
            !!values.password
        ) {
            const user = values
            addUser(dispatch, user)

            setSuccessMessage("User registered successfully")
            localStorage.setItem("user", globalState.user)
        } else {
            setErrorMessage("Please check all the fields again and retry.")
        }
    }

    const data = {
        title: "Register to VideoFlix",
        labels: [
            {
                name: "firstName",
                title: "Enter first name",
            },
            {
                name: "lastName",
                title: "Enter last name",
            },
            {
                name: "email",
                title: "Enter email",
            },
            {
                name: "password",
                title: "Enter password",
            },
        ],
        submitHandler,
        errorMessage,
        successMessage,
    }

    const { Modal, openModal } = useModal()

    useEffect(() => {
        if (globalState.modal?.showSignUp) openModal()
    }, [globalState.modal?.showSignUp])

    return (
        <>
            <Modal {...data} />
        </>
    )
}

export default Register
