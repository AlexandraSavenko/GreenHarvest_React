import { useState } from "react";
import css from "./Modal.module.css"
import Navigation from "../Navigation/Navigation";
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";



export default function Modal () {
    const [open, setOpen] = useState(false)

    function openModal () {
        setOpen(!open)
console.log(open)
    }

    return open ? <button className={css.menuButton} onClick={openModal}><HiMenuAlt1 className={css.burgerIcon} />
</button> : <div className={css.modal}>
    <button className={css.menuButton} onClick={openModal}><CgClose className={css.modalCloseBtn} />
    </button>
        <Navigation/>
        <ShopNowBtn/>
    </div>
}