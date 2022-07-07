import Login from "../Login"
import SignUp from "../SignUp"
import Footer from "./Footer"
import Header from "./Header"

import "./index.css"

const Layout = props => {
    return (
        <div className="layout-container bg-gray-200">
            <Header />
            <div className="py-24 px-6">{props.children}</div>
            <Login />
            <SignUp />
            <Footer />
        </div>
    )
}

export default Layout
