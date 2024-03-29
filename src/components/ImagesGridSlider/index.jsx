import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

import leftArrow from "../../assets/images/left.webp"

import styles from "./index.module.scss"

import Icon from "../UI/Icon"
import { Link } from "react-router-dom"

// ImgData {
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

const ImagesGridSlider = props => {
    const [slideWidthAndHeight, setSlideWidthAndHeight] = useState({})
    const [disabledButton, setDisabledButton] = useState({
        left: true,
        right: false,
    })

    const slidesWrapper = useRef()
    const currentSlideIteration = useRef(0)

    useEffect(() => {
        const { maxSlides } = props

        const minWidth = (1 / maxSlides) * 100 + "%"
        const paddingTop =
            (1 / maxSlides) * 100 + (1 / maxSlides / 3) * 100 + "%"

        setSlideWidthAndHeight({
            minWidth,
            paddingTop,
        })
    }, [])

    const { pictures, maxSlides } = props

    const slide = direction => {
        const individualSlide = document.getElementById(
            "individualSlide-" + props.id
        )

        const wrapperWidth = slidesWrapper.current.getBoundingClientRect().width
        const individualSlideWidth =
            individualSlide.getBoundingClientRect().width

        const noOfSets = Math.floor(props.pictures.length / maxSlides)

        const remainingElementsInTheLastSet = props.pictures.length % maxSlides

        const sliderClassName = `.${props.id}-select`

        switch (direction) {
            case "right":
                setDisabledButton({
                    ...disabledButton,
                    left: false,
                })

                if (currentSlideIteration.current === noOfSets - 1) {
                    gsap.to(sliderClassName, {
                        duration: 0.2,
                        x: -(
                            currentSlideIteration.current * wrapperWidth +
                            individualSlideWidth * remainingElementsInTheLastSet
                        ),
                    })

                    currentSlideIteration.current++

                    setDisabledButton({
                        ...disabledButton,
                        right: true,
                    })

                    break
                }

                currentSlideIteration.current++

                gsap.to(sliderClassName, {
                    duration: 0.2,
                    x: -(currentSlideIteration.current * wrapperWidth),
                })

                break

            case "left":
                if (currentSlideIteration.current <= 0) {
                    setDisabledButton({
                        ...disabledButton,
                        left: true,
                    })

                    break
                }

                setDisabledButton({
                    ...disabledButton,
                    right: false,
                })

                currentSlideIteration.current--

                gsap.to(sliderClassName, {
                    duration: 0.2,
                    x: -(currentSlideIteration.current * wrapperWidth),
                })

                break

            default:
                break
        }
    }

    const Slides = () => {
        return pictures.map((item, i) => {
            const child = (
                <div
                    className={`${styles.slideInnerWrap} absolute top-0 left-0`}
                >
                    <div className={`${styles.slideBgd}`}>
                        <div className={`${styles.picWrap} relative`}>
                            <img
                                className={`${styles.actualPic} absolute top-0 left-0`}
                                src={item.smallPoster}
                                alt={item.name + "poster"}
                            />
                        </div>

                        <div className={`${styles.footer} flex-row-center`}>
                            <p>{item.name}</p>
                        </div>
                    </div>
                </div>
            )

            return (
                <Link
                    to={item.url}
                    key={"images-slider-key-" + "-" + i}
                    className={`${styles.slideWrap} relative`}
                    style={slideWidthAndHeight}
                    id={"individualSlide-" + props.id}
                >
                    {child}
                </Link>
            )
        })
    }

    return (
        <div className={`${styles.container}`}>
            <div
                className={`${styles.imageSlideShowContainer} flex-col-north-west`}
            >
                <div className={`${styles.slideShowHeader} flex-row-center`}>
                    <h2 className={`${styles.heading2}`}>{props.title}</h2>

                    <div className={`${styles.leftRight} flex-row-center`}>
                        {!disabledButton.left && (
                            <Icon
                                src={leftArrow}
                                onClick={() => {
                                    slide("left")
                                }}
                            />
                        )}

                        {!disabledButton.right && (
                            <Icon
                                src={leftArrow}
                                rotate
                                onClick={() => {
                                    slide("right")
                                }}
                            />
                        )}
                    </div>
                </div>

                <div
                    className={`${styles.outerSlideWrap}`}
                    ref={slidesWrapper}
                    id={"slidesWrapper"}
                >
                    <div
                        className={`${styles.actualSlideWrappers} ${props.id}-select flex-row-north-west`}
                    >
                        {Slides()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagesGridSlider
