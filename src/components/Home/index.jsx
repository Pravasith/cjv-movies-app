import Content from "../Content"
import { movieBackdrops } from "../data"
import ImagesGridSlider from "../ImagesGridSlider"
import HeroSection from "../SlideShow"

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

const imageData = movieBackdrops.map(movie => {
    return {
        title: movie.title,
        url: movie.poster,
        id: movie.id,
    }
})

const Home = () => {
    return (
        <div className="flex-col-center w-full">
            <div className="my-12 w-full">
                <HeroSection />
            </div>

            <div className="my-12 w-full">
                <ImagesGridSlider
                    id={"featured-movies"}
                    title={"Featured Movies"}
                    pictures={imageData}
                    maxSlides={6}
                />
            </div>
            <div className="my-12 w-full">
                <ImagesGridSlider
                    id={"featured-tv-shows"}
                    title={"Featured TV Shows"}
                    pictures={imageData}
                    maxSlides={6}
                />
            </div>
            <div className="my-12 w-full">
                <Content />
            </div>
        </div>
    )
}

export default Home
