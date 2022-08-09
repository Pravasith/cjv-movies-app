import { useContext } from "react"
import AppContext from "../../contexts/AppContext"

const Dashboard = () => {
    const { globalState } = useContext(AppContext)

    return (
        <div className="flex-row-center my-20">
            <div>
                {globalState.user && globalState.user.email ? (
                    <div className="flex-col-west my-6">
                        <h3 className="my-5">Your details:</h3>
                        <p>
                            First name:
                            <strong className="mx-2">
                                {globalState.user.firstName}
                            </strong>
                        </p>
                        <p>
                            Last name:
                            <strong className="mx-2">
                                {globalState.user.lastName}
                            </strong>
                        </p>
                        <p>
                            Email:
                            <strong className="mx-2">
                                {globalState.user.email}
                            </strong>
                        </p>
                    </div>
                ) : (
                    <h1>
                        You are not authorised to see this page. Please login.
                    </h1>
                )}
            </div>
        </div>
    )
}

export default Dashboard
