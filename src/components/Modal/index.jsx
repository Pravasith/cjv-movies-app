import { useState } from "react"
import { useForm } from "../../hooks/useForm"
import Button from "../UI/Button"
import Icon from "../UI/Icon"

import closeIcon from "../../assets/images/close.webp"

const Modal = props => {
    const { values, handler } = useForm({})

    const [close, setClose] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if (props.submitHandler) props.submitHandler(values)
    }

    const closeModal = () => {
        setClose(true)
    }

    return (
        <>
            {!close && (
                <div className="fixed w-screen h-screen top-0">
                    <div className="flex-col-center w-full h-full bg-black/30">
                        <form
                            className="flex-col-center my-4 w-1/3 py-4 px-8 bg-white rounded-3xl relative"
                            onSubmit={handleSubmit}
                        >
                            <div
                                className="absolute -top-5 -right-5"
                                onClick={closeModal}
                            >
                                <Icon src={closeIcon} />
                            </div>

                            <h3 className="font-bold underline">
                                {props.title}
                            </h3>
                            <br />

                            {props.labels.map((label, i) => {
                                return (
                                    <label
                                        key={"label-" + i}
                                        className="my-2 w-full"
                                    >
                                        {label.title + ":"}{" "}
                                        <input
                                            className="w-full border-4 border-blue-400"
                                            name={label.name}
                                            type="text"
                                            value={values[props.name]}
                                            onChange={handler}
                                        />
                                    </label>
                                )
                            })}

                            <Button
                                className={"my-2"}
                                type={"submit"}
                                text={"Change"}
                            />
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
