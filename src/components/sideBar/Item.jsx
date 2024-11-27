import {Link} from "react-router-dom";
import Icon from "../shared/Icon.jsx";
import { useState } from "react";

export default function Item({ to = "/", title = null, icon = null }) {

    const [active, setActive] = useState(false)

    return (
        <>
            <Link to={to} className={"w-full h-[46px] rounded-b-lg bg-[#6F67E8]"}>
                { title }
                <Icon name={icon} />
            </Link>
        </>
    )
}