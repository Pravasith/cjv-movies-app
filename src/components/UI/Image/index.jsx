const Image = props => {
    const { image } = props

    return (
        <div className="flex-col-center  rounded-xl bg-black h-80 my-6 mx-2">
            <img className="object-contain h-80 p-0" src={image.src} />
        </div>
    )
}

export default Image
