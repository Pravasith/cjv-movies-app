import SearchIcon from "../../../../assets/images/search.webp"
import TextArea from "../../../UI/TextArea"
import Button from "../../../UI/Button"
import Icon from "../../../UI/Icon"
import { useState } from "react"

import { useEffect } from "react"
import { useContext } from "react"
import AppContext from "../../../../contexts/AppContext"
import { getSearchResults } from "../../../../actions/mediaActions"

const SearchBar = props => {
    const [message, setMessage] = useState()
    const [searchTerm, setSearchTerm] = useState()

    const { globalState, dispatch } = useContext(AppContext)

    const mediaList = [
        {
            name: "Sex with Monica",
            id: 1,
            smallPoster:
                "https://wookie.codesubmit.io/static/posters/a9d94d6e-4cab-44a9-8eec-d44ad6332b6d.jpg",
        },
        {
            name: "Sex with Harita",
            id: 2,
            smallPoster:
                "https://wookie.codesubmit.io/static/posters/a9d94d6e-4cab-44a9-8eec-d44ad6332b6d.jpg",
        },
    ]

    const getResults = () => {
        if (searchTerm) getSearchResults(dispatch, searchTerm)
    }

    return (
        <div className="relative">
            <div className="flex-row-center py-2 mx-3 h-20">
                <Icon noClick src={SearchIcon} />
                <div className="w-80 flex-col-center mx-2">
                    <TextArea
                        onChange={e => {
                            setSearchTerm(e.target.value)
                        }}
                        rows={1}
                        placeholder={"What's on your mind?"}
                    />
                </div>
                <Button text={"Search"} onClick={getResults} />
            </div>

            <div className="absolute w-full bg-white">
                <p>{message}</p>

                <div className="flex-col-west">
                    {globalState?.media?.searchedMedia?.map((item, i) => {
                        return (
                            <a
                                href={"/show-details/" + item.id}
                                key={"list-media-key-" + "-" + i}
                                className="cursor-pointer hover:underline my-2"
                            >
                                <div className="flex-row-west px-12">
                                    <img
                                        className="h-10 pr-4"
                                        src={item.smallPoster}
                                    />
                                    <p>{item.name}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchBar
