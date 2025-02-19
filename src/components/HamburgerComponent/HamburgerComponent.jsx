import { useState } from "react"
import Hamburger from 'hamburger-react'
import Navigation from "../Navigation/Navigation"
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn"
import css from "./HamburgerComponent.module.css"

export default function HamburgerComponent ( ){
    const [open, setOpen] = useState(false)

    return <div><Hamburger
    size={24}
    toggled={open}
    toggle={setOpen}
    />
    {open && <div className="modal">
        <header>
        <Hamburger
        className={css.menu}
    size={24}
    toggled={open}
    toggle={setOpen}
    />
        </header>
                <Navigation/>
                <ShopNowBtn/>
        </div>}
    </div>
}