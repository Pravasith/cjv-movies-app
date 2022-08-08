import { useContext } from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getMovies, getTvShows } from "../../actions/mediaActions"
import AppContext from "../../contexts/AppContext"
import { API_URL } from "../../services/routes"

import Image from "../UI/Image"

const MoviesAndTVShows = props => {
    const { globalState, dispatch } = useContext(AppContext)

    useEffect(() => {
        getMovies(dispatch)
        getTvShows(dispatch)
    }, [])

    return (
        <div className="flex-col-center w-full">
            <h1 className="py-10">Movies and TV Shows</h1>
            <div className="grid grid-cols-6 gap-4">
                {globalState?.media?.tvShows &&
                    globalState?.media?.movies &&
                    [
                        ...globalState.media?.movies,
                        ...globalState.media?.tvShows,
                    ].map((item, i) => {
                        return (
                            <Link
                                key={i + "-media"}
                                to={"/show-details/" + item.id}
                            >
                                <div className="cursor-pointer hover:scale-105 transition-all">
                                    <Image image={{ src: item.smallPoster }} />
                                </div>
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}

export default MoviesAndTVShows
