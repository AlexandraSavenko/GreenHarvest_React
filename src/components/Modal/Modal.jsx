import { useState } from "react";
import css from "./Modal.module.css"
import Navigation from "../Navigation/Navigation";
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";



export default function Modal () {
    const [open, setOpen] = useState(false)

    function toggleModal () {
        setOpen(!open)
    }

    return open ?  <div className={css.modal}>
    <button className={css.menuButton} onClick={toggleModal}><CgClose className={css.modalCloseIcon} />
    </button>
        <Navigation className={css.navLink}/>
        <ShopNowBtn/>
    </div> : <button className={css.menuButton} onClick={toggleModal}><HiMenuAlt1 className={css.burgerIcon} />
</button>
}