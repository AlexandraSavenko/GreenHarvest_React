import HamburgerComponent from "../HamburgerComponent/HamburgerComponent";
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
import css from "./Header.module.css"
// import { HiMenuAlt1 } from "react-icons/hi";

export default function Header (){
    const isDeskTop = false;
return <div className={css.header}>
<Logo/>
{isDeskTop ? <div className="nav">
    <Navigation/>
<ShopNowBtn/>
</div> : <HamburgerComponent/>}
</div>
}