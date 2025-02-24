import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
// import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useRef } from "react";
import css from "./NavBar.module.css"

export default function NavBar (){
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
        console.log(navRef)
    }
    return <header>
        <Logo/>
        <nav ref={navRef}>
            <Navigation className={css.navLink}/>
            <button className={css.shopBtn}>shop now</button>
            <button className={css.menuButton} onClick={showNavBar}><CgClose className={css.modalCloseIcon} />
            </button>
        </nav>
        <button className={css.menuButton} onClick={showNavBar}><HiMenuAlt1 className={css.burgerIcon} />
            </button>
    </header>
}