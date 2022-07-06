import { useContext } from "react"
import AppContext from "../../contexts/AppContext"
import Modal from "../Modal"
import Footer from "./Footer"
import Header from "./Header"
import "./index.css"

const Layout = props => {
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
        <div className="layout-container">
            <Header />
            <div className="pt-36">{props.children}</div>
            <Modal {...data} />
            <Footer />
        </div>
    )
}

export default Layout
