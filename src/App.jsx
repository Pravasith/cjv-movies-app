import "./App.css"
import Layout from "./components/Layout"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import { useReducer } from "react"
import userReducer from "./reducers/userReducer"
import AppContext from "./contexts/AppContext"

import userImage from "./assets/images/user.png"

const RoutesComp = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/settings" element={<Settings />} /> */}
            </Routes>
        </Layout>
    </BrowserRouter>
)

function App() {
    const initialState = {
        userProfile: {
            thumbnail: userImage,
            fullName: "",
        },
        showLogin: false,
    }

    const [globalState, dispatch] = useReducer(userReducer, initialState)

    return (
        <div className="App">
            <AppContext.Provider value={{ globalState, dispatch }}>
                <RoutesComp />
            </AppContext.Provider>
        </div>
    )
}

export default App
