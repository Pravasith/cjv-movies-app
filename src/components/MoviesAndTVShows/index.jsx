import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { API_URL } from "../../api"
import Image from "../UI/Image"

const MoviesAndTVShows = props => {
    const [movieBackdrops, setMovieBackdrops] = useState([])

    useEffect(() => {
        fetch(API_URL + "/videos")
            .then(res => res.json())
            .then(data => setMovieBackdrops(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="flex-col-center w-full">
            <h1 className="py-10">Movies and TV Shows</h1>
            <div className="grid grid-cols-6 gap-4">
                {movieBackdrops.map(movie => {
                    return (
                        <Link to={"/show-details/" + movie.slug}>
                            <div className="cursor-pointer hover:scale-105 transition-all">
                                <Image image={{ src: movie.poster }} />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default MoviesAndTVShows
