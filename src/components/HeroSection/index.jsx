import Image from "../UI/Image"

import leftArrow from "../../assets/images/left.webp"
import Icon from "../UI/Icon"
import { useState } from "react"

const image = {
    src: "https://i.pinimg.com/736x/c3/e4/24/c3e424e35083c15a4bd106c46fd051f5.jpg",
}

const HeroSection = props => {
    const [slideCount, setSlideCount] = useState(0)

    const clickHandler = dir => {
        if (dir === "r") setSlideCount(c => c - 1)
        else setSlideCount(c => c + 1)
    }

    const SLIDE_PERCENTAGE = 100

    return (
        <div className="relative w-full ">
            <div className="w-full overflow-hidden">
                <div
                    style={{
                        transform: `translate(${
                            slideCount * SLIDE_PERCENTAGE
                        }%)`,
                    }}
                    className={`transition ease-in-out delay-150`}
                >
                    <Image image={image} />
                </div>
            </div>

            <div className="absolute left-4 top-0 h-full">
                <div className="flex-col-center h-full">
                    <Icon src={leftArrow} onClick={() => clickHandler("l")} />
                </div>
            </div>

            <div className="absolute right-4 top-0 h-full">
                <div className="flex-col-center h-full">
                    <Icon
                        src={leftArrow}
                        rotate
                        onClick={() => clickHandler("r")}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
