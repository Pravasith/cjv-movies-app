const TextArea = props => {
    return (
        <textarea
            onChange={props.onChange}
            rows={props.rows || 2}
            placeholder={props.placeholder}
            className="border-4 border-gray-500 mx-1 py-2 px-4 rounded-3xl w-full h-full"
        />
    )
}

export default TextArea
