const Image = props => {
    const { image } = props

    return (
        <div className="flex-col-center  rounded-xl bg-black h-96 my-6">
            <img className="object-contain h-96 p-0" src={image.src} />
        </div>
    )
}

export default Image
