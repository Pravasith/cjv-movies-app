import { useContext } from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailedMedia } from "../../actions/mediaActions"
import AppContext from "../../contexts/AppContext"

import Image from "../UI/Image"

const DetailsPage = () => {
    const { globalState, dispatch } = useContext(AppContext)

    const { id } = useParams()

    const mediaDetails = globalState?.media?.detailedMedia

    useEffect(() => {
        getDetailedMedia(dispatch, id)
    }, [])

    return (
        <div className="flex-row-center my-20">
            <div className="w-1/3">
                {mediaDetails && (
                    <Image
                        image={{
                            src: mediaDetails.smallPoster,
                        }}
                    />
                )}
            </div>

            <div className="flex-col-west mx-12 w-1/3">
                {mediaDetails && (
                    <>
                        <h1 className="py-1">{mediaDetails.name}</h1>

                        <p className="my-4">{mediaDetails.synopsis}</p>

                        <p className="py-1 font-bold hover:underline cursor-pointer">
                            {"Buy for $" + mediaDetails.price}
                        </p>
                        <p className="py-1 font-bold hover:underline cursor-pointer">
                            {"Rent for $" + mediaDetails.rentPrice}
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default DetailsPage
