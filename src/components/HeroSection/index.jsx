import { useContext } from "react"
import { useEffect } from "react"
import { getBackdrops } from "../../actions/backdropActions"
import AppContext from "../../contexts/AppContext"
import SlideShow from "../SlideShow"

const HeroSection = props => {
    const { globalState, dispatch } = useContext(AppContext)

    useEffect(() => {
        getBackdrops(dispatch)
    }, [])

    return (
        <div className="w-full">
            <h3 className="mb-4 text-2xl font-extrabold">
                Most demanded movies
            </h3>
            {globalState.backdrops && (
                <SlideShow movieBackdrops={globalState.backdrops} />
            )}
        </div>
    )
}

export default HeroSection
