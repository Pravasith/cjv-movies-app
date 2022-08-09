import "./App.css"
import Layout from "./components/Layout"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import MoviesAndTVShows from "./components/MoviesAndTVShows"

import { useReducer } from "react"
import AppContext from "./contexts/AppContext"

import DetailsPage from "./components/DetailsPage"
import { globalReducer } from "./reducers"

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
        user: localStorage.getItem("user"),
        media: null,
    }

    const [globalState, dispatch] = useReducer(globalReducer, initialState)

    return (
        <div className="App">
            <AppContext.Provider value={{ globalState, dispatch }}>
                <RoutesComp />
            </AppContext.Provider>
        </div>
    )
}

export default App
