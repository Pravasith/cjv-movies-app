import { movieBackdrops } from "../data"
import Image from "../UI/Image"

const MoviesAndTVShows = props => {
    return (
        <div className="flex-col-center w-full">
            <h1 className="py-10">Movies and TV Shows</h1>
            <div className="grid grid-cols-6 gap-4">
                {movieBackdrops.map(movie => {
                    return (
                        <div className="cursor-pointer hover:scale-105 transition-all">
                            <Image image={{ src: movie.poster }} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MoviesAndTVShows
