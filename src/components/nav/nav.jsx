import "./nav.css";
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { TiGroupOutline } from "react-icons/ti"
import { BiMessageRoundedDots } from "react-icons/bi"
import { BsArrowDownCircle } from "react-icons/bs"


function Navbar () {

    return (
        <div className="navigation">

                <a href="#home">
                        <AiOutLineHome className="icon active-nav" />
                </a>

                <a href="#home">
                        <AiOutLineHome className="icon active-nav" />
                </a>

                <a href="#home">
                        <TiGroupOutline className="icon active-nav" />
                </a>

                <a href="#home">
                        <BiMessageRoundedDots className="icon active-nav" />
                </a>

                <a href="#home">
                        <BsArrowDownCircle className="icon active-nav" />
                </a>



        </div>
    )
}

export default Navbar;