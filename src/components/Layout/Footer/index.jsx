import Icon from "../../UI/Icon"

import instagram from "../../../assets/images/instagram.webp"
import meta from "../../../assets/images/meta.png"
import twitter from "../../../assets/images/twitter.png"
import pinterest from "../../../assets/images/pinterest.png"

const Footer = () => {
    return (
        <div className="flex flex-row justify-between bg-black w-full py-20 px-10">
            <div className="flex flex-row justify-evenly items-center text-white w-2/3">
                <h3 className="cursor-pointer">About us</h3>
                <h3 className="cursor-pointer">Contact us</h3>
                <h3 className="cursor-pointer">Careers</h3>
                <h3 className="cursor-pointer">About us</h3>
            </div>{" "}
            <div className="flex flex-row justify-evenly items-center w-1/3">
                <Icon src={instagram} />
                <Icon src={meta} />
                <Icon src={twitter} />
                <Icon src={pinterest} />
            </div>
        </div>
    )
}

export default Footer
