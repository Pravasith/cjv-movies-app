import { useEffect, useState } from "react"
import { API_BASE_URLS, API_URL, API_URLS } from "../../services/routes"
import Content from "../Content"

import ImagesGridSlider from "../ImagesGridSlider"
import HeroSection from "../HeroSection"
import api from "../../services/api"
import { getFeaturedMedia } from "../../actions/mediaActions"
import { useContext } from "react"
import AppContext from "../../contexts/AppContext"

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
    const { globalState, dispatch } = useContext(AppContext)

    useEffect(() => {
        getFeaturedMedia(dispatch, "movies")
        getFeaturedMedia(dispatch, "tv-shows")
    }, [])

    useEffect(() => {
        console.log(globalState)
    }, [globalState])

    return (
        <div className="flex-col-center w-full">
            <div className="my-12 w-full">{/* <HeroSection /> */}</div>

            <div className="my-12 w-full">
                {globalState.media?.featuredMovies && (
                    <ImagesGridSlider
                        id={"featured-movies"}
                        title={"Featured Movies"}
                        pictures={globalState.media?.featuredMovies.map(
                            image => ({
                                ...image,
                                url: "/show-details/" + image.slug,
                            })
                        )}
                        maxSlides={6}
                    />
                )}
            </div>
            <div className="my-12 w-full">
                {globalState.media?.featuredTvShows && (
                    <ImagesGridSlider
                        id={"featured-tv-shows"}
                        title={"Featured TV Shows"}
                        pictures={globalState.media?.featuredTvShows.map(
                            image => ({
                                ...image,
                                url: "/show-details/" + image.slug,
                            })
                        )}
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
