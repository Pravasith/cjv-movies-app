import { useEffect, useState } from "react"
import { API_URL } from "../../api"
import Content from "../Content"

import ImagesGridSlider from "../ImagesGridSlider"
import HeroSection from "../HeroSection"

// interface ImgData {
//     title: string
//     url: string
//     id: string
// }

// props: {
//     id: string // unique id
//     title: string
//     pictures: ImgData[] // pictures array
//     maxSlides: number
//     linkUrl?: string
// }

// const imageData = movieBackdrops.map(movie => {
//     return {
//         title: movie.title,
//         url: movie.poster,
//         id: movie.id,
//     }
// })

const Home = () => {
    const [imageData, setImageData] = useState()

    useEffect(() => {
        fetch(API_URL + "/videos")
            .then(res => res.json())
            .then(data => setImageData(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="flex-col-center w-full">
            <div className="my-12 w-full">
                <HeroSection />
            </div>

            <div className="my-12 w-full">
                {imageData && (
                    <ImagesGridSlider
                        id={"featured-movies"}
                        title={"Featured Movies"}
                        pictures={imageData
                            .filter(image => image.type === "movie")
                            .map(image => ({
                                ...image,
                                url: "/show-details/" + image.slug,
                            }))}
                        maxSlides={6}
                    />
                )}
            </div>
            <div className="my-12 w-full">
                {imageData && (
                    <ImagesGridSlider
                        id={"featured-tv-shows"}
                        title={"Featured TV Shows"}
                        pictures={imageData
                            .filter(image => image.type === "tv-series")
                            .map(image => ({
                                ...image,
                                url: "/show-details/" + image.slug,
                            }))}
                        maxSlides={6}
                    />
                )}
            </div>
            <div className="my-12 w-full">
                <Content />
            </div>
        </div>
    )
}

export default Home
