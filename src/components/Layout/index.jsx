import Login from "../Login"
import SignUp from "../SignUp"
import Footer from "./Footer"
import Header from "./Header"

const Layout = props => {
    return (
        <div className="w-full bg-gray-200 ">
            <Header />
            <div className="py-32 px-1/10">{props.children}</div>
            <Login />
            <SignUp />
            <Footer />
        </div>
    )
}

export default Layout
