const Icon = props => {
    return (
        <div
            className={`p-1 cursor-pointer hover:bg-blue-400 active:bg-yellow-300 ${
                props.size === "lg"
                    ? "min-w-20 min-h-20 h-20 w-20 "
                    : props.size === "sm"
                    ? "min-w-8 min-h-8 h-8 w-8"
                    : "min-w-12 min-h-12 h-12 w-12"
            } ${!props.noBackground && "bg-white rounded-full"} ${
                props.rotate && "rotate-180"
            }`}
            onClick={props.onClick}
        >
            <img
                className="bg-white w-full h-full object-cover rounded-full"
                src={props.src}
            />
        </div>
    )
}

export default Icon
