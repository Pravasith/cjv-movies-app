import Image from "../UI/Image"

import leftArrow from "../../assets/images/left.webp"
import Icon from "../UI/Icon"
import { useEffect, useState } from "react"
import { movieBackdrops } from "../data"

const HeroSection = props => {
    const [slideCount, setSlideCount] = useState(0)

    const clickHandler = dir => {
        if (dir === "r") setSlideCount(c => c - 1)
        else if (dir === "l") setSlideCount(c => c + 1)
    }

    useEffect(() => {
        console.log(slideCount)
    }, [slideCount])

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
                    {movieBackdrops.map((movie, i) => {
                        const movieMorph = {
                            src: movie.backdrop,
                        }

                        return (
                            <div
                                className="min-w-full"
                                key={"movie-backdrop-" + i}
                            >
                                {<Image image={movieMorph} />}
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
                    {-slideCount < movieBackdrops.length - 1 && (
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

export default HeroSection
