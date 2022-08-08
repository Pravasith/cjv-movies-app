import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../services/routes"

import Image from "../UI/Image"

const DetailsPage = props => {
    const [movie, setMovie] = useState()

    const { id } = useParams()

    useEffect(() => {
        fetch(API_URL + "/videos/?slug=" + id)
            .then(res => res.json())
            .then(data => {
                setMovie(data[0])
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="flex-row-center my-20">
            <div className="w-1/3">
                {movie && (
                    <Image
                        image={{
                            src: movie.poster,
                        }}
                    />
                )}
            </div>

            <div className="flex-col-west mx-12 w-1/3">
                {movie && (
                    <>
                        <h1 className="py-1">{movie.title}</h1>
                        <p className="py-1 font-semibold">
                            {movie.cast.join(", ")}
                        </p>
                        <p className="py-1 font-semibold">
                            {" "}
                            {"Directed by:  " + movie.director}
                        </p>
                        <p className="my-4">{movie.overview}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default DetailsPage
