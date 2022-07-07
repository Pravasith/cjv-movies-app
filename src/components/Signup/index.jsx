import Modal from "../Modal"
import { useContext } from "react"
import AppContext from "../../contexts/AppContext"

const Signup = props => {
    const { dispatch } = useContext(AppContext)
    const data = {
        title: "Login to MovieFlix",
        labels: [
            {
                name: "username",
                title: "Enter Username",
            },
            {
                name: "password",
                title: "Enter password",
            },
        ],
        submitHandler: values => {
            //void
            dispatch({
                type: "USER_LOGGED_IN",
                payload: { fullName: values.username },
            })
        },
    }
    return (
        <>
            <Modal {...data} />
        </>
    )
}

export default Signup
