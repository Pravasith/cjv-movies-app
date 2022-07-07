import { useState } from "react"
import { useParams } from "react-router-dom"
import { movieBackdrops } from "../data"
import Image from "../UI/Image"

const DetailsPage = props => {
    const movie = movieBackdrops[0]

    const { id } = useParams()

    useState(() => {
        fetch(`http://localhost:8000/blogs`)
            // .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="flex-row-center my-20">
            <div className="w-1/3">
                <Image
                    image={{
                        src: "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
                    }}
                />
            </div>

            <div className="flex-col-west mx-12 w-1/3">
                <h1 className="py-1">Top Gun</h1>
                <p className="py-1">{movie.cast.join(", ")}</p>
                <p>{"Directed by:  " + movie.director + id}</p>

                <p className="my-4">{movie.overview}</p>
            </div>
        </div>
    )
}

export default DetailsPage
