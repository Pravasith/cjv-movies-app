import Image from "../UI/Image"

import leftArrow from "../../assets/images/left.webp"
import Icon from "../UI/Icon"
import { useState } from "react"
import { Link } from "react-router-dom"

const SlideShow = props => {
    const [slideCount, setSlideCount] = useState(0)

    const clickHandler = dir => {
        if (dir === "r") setSlideCount(c => c - 1)
        else if (dir === "l") setSlideCount(c => c + 1)
    }

    const SLIDE_PERCENTAGE = 100

    return (
        <div className="relative w-full ">
            <div className="w-full overflow-hidden flex-row">
                <div
                    style={{
                        transform: `translate(${
                            slideCount * SLIDE_PERCENTAGE
                        }%)`,
                    }}
                    className={` transition ease-in-out delay-150 flex-row-west w-full`}
                >
                    {props.movieBackdrops.map((movie, i) => {
                        const movieMorph = {
                            src: movie.backdrop,
                            title: movie.title,
                            id: movie.slug,
                        }

                        return (
                            <div
                                className="min-w-full relative"
                                key={"movie-backdrop-" + i}

                                // This is the background which takes image width and height
                            >
                                <Link to={"/show-details/" + movieMorph.id}>
                                    {" "}
                                    <div className="absolute left-0 bottom-6 w-full text-white ">
                                        <h1 className="text-center py-4 bg-gradient-to-tr from-black rounded-b-xl">
                                            {movieMorph.title}
                                        </h1>
                                    </div>
                                    {<Image image={movieMorph} />}{" "}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="absolute left-4 top-0 h-full">
                <div className="flex-col-center h-full">
                    {slideCount < 0 && (
                        <Icon
                            src={leftArrow}
                            onClick={() => {
                                clickHandler("l")
                            }}
                        />
                    )}
                </div>
            </div>

            <div className="absolute right-4 top-0 h-full">
                <div className="flex-col-center h-full">
                    {-slideCount < props.movieBackdrops.length - 1 && (
                        <Icon
                            src={leftArrow}
                            rotate
                            onClick={() => {
                                clickHandler("r")
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SlideShow
