import "./App.css"
import Layout from "./components/Layout"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import MoviesAndTVShows from "./components/MoviesAndTVShows"

import { useReducer } from "react"
import userReducer from "./reducers/userReducer"
import AppContext from "./contexts/AppContext"

import userImage from "./assets/images/user.png"
import DetailsPage from "./components/DetailsPage"

const RoutesComp = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies-tv-shows" element={<MoviesAndTVShows />} />
                <Route path="/show-details/:id" element={<DetailsPage />} />
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
