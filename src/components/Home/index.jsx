import { useEffect } from "react"
import Content from "../Content"

import ImagesGridSlider from "../ImagesGridSlider"
import HeroSection from "../HeroSection"

import { getFeaturedMedia } from "../../actions/mediaActions"
import { useContext } from "react"
import AppContext from "../../contexts/AppContext"

const Home = () => {
    const { globalState, dispatch } = useContext(AppContext)

    useEffect(() => {
        getFeaturedMedia(dispatch, "movies")
        getFeaturedMedia(dispatch, "tv-shows")
    }, [])

    return (
        <div className="flex-col-center w-full">
            <div className="my-12 w-full">
                <HeroSection />
            </div>

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
