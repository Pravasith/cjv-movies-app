import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Layout from "./components/Layout"
import MoviesAndTVShows from "./components/MoviesAndTVShows"

import { useReducer } from "react"
import AppContext from "./contexts/AppContext"

import Dashboard from "./components/Dashboard"
import DetailsPage from "./components/DetailsPage"
import { globalReducer } from "./reducers"

const RoutesComp = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies-tv-shows" element={<MoviesAndTVShows />} />
                <Route path="/show-details/:id" element={<DetailsPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Layout>
    </BrowserRouter>
)

function App() {
    const initialState = {
        user: JSON.parse(localStorage.getItem("user")),
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
