import Icon from "../../UI/Icon"
import { useContext } from "react"
import AppContext from "../../../contexts/AppContext"

import { Link } from "react-router-dom"

import SearchBar from "./SearchBar"
import { showLoginModal, showSignUpModal } from "../../../actions/modalActions"
import { userSignOut } from "../../../actions/userActions"

import userImage from "../../../assets/images/user.png"

const Header = () => {
    const { globalState, dispatch } = useContext(AppContext)

    const onLogin = () => {
        showLoginModal(dispatch)
    }

    const onSignUp = () => {
        showSignUpModal(dispatch)
    }

    const onLogout = () => {
        userSignOut(dispatch)
    }

    return (
        <div className="header-container fixed w-full bg-white z-10">
            <div className="flex-col-center w-full">
                <div className="flex-row-spaced w-full  border-black border-b-2">
                    <div className="flex-row-west px-4 py-1">
                        <Link to={"/"}>
                            <h3>VideoFlix</h3>
                        </Link>
                    </div>

                    <SearchBar />

                    <Link to={"/dashboard"}>
                        <div className="flex-row-center px-4 py-1">
                            <Icon src={userImage} />
                            {globalState.user && (
                                <p className="p-4">
                                    {globalState.user.firstName +
                                        " " +
                                        globalState.user.lastName}
                                </p>
                            )}
                        </div>
                    </Link>
                </div>

                <div className="flex-row-spaced w-full  border-white border-b-2">
                    <div className="flex-row-center w-full">
                        <h3 className="px-4 py-1 hover:underline cursor-pointer">
                            <Link to="/">{"Home"}</Link>
                        </h3>

                        {globalState.user && (
                            <h3 className="px-4 py-1 hover:underline cursor-pointer">
                                <Link to="/dashboard">{"Dashboard"}</Link>
                            </h3>
                        )}

                        <h3 className="px-4 py-1 hover:underline cursor-pointer">
                            <Link to="/movies-tv-shows">
                                {"Movies & TV Shows"}
                            </Link>
                        </h3>

                        {!globalState.user && (
                            <h3
                                onClick={onSignUp}
                                className="px-4 py-1 hover:underline cursor-pointer"
                            >
                                {"Register"}
                            </h3>
                        )}

                        <h3
                            onClick={globalState.user ? onLogout : onLogin}
                            className="px-4 py-1 hover:underline cursor-pointer"
                        >
                            {globalState.user ? "Logout" : "Login"}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
