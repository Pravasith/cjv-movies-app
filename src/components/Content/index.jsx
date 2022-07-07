const Content = () => {
    const actors = [
        "https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY317_CR10,0,214,317_AL_.jpg",
        "https://images.fanpop.com/images/image_uploads/Jennifer-Connelly-jennifer-connelly-204132_309_400.jpg",
        "https://media.gettyimages.com/photos/salma-hayek-attends-the-77th-annual-golden-globe-awards-at-the-on-picture-id1197740140?s=612x612",
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_sACt9bxX4YNlYMzVSPJFUi979OwgqvmLLaFK8cSQIFA9j_37",
        "https://upload.wikimedia.org/wikipedia/commons/4/40/Denzel_Washington_2018.jpg",
        "https://resizing.flixster.com/6khnzvKZHG1W_-r_YUkBI5_3DUI=/218x280/v2/https://flxt.tmsimg.com/assets/245574_v9_bc.jpg",
    ]

    return (
        <div className="flex flex-row items-center justify-evenly w-full bg-white px-12">
            <h1 className="">ACTORS SPOTLIGHT</h1>
            <div className="grid gap-2 grid-cols-3">
                {actors.map((actor, i) => (
                    <div key={"actor" + i} className="w-20 h-30">
                        <img src={actor} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content
