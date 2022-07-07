import { useEffect, useState } from "react"
import { API_URL } from "../../api"
import SlideShow from "../SlideShow"

const HeroSection = props => {
    const [movieBackdrops, setMovieBackdrops] = useState()

    useEffect(() => {
        fetch(API_URL + "/backdrops")
            .then(res => res.json())
            .then(data => {
                setMovieBackdrops(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="w-full">
            <h3 className="mb-4 text-2xl font-extrabold">
                Most demanded movies
            </h3>
            {movieBackdrops && <SlideShow movieBackdrops={movieBackdrops} />}
        </div>
    )
}

export default HeroSection
