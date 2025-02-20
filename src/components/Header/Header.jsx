import Logo from "../Logo/Logo"
import Modal from "../Modal/Modal";
import Navigation from "../Navigation/Navigation"
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
import css from "./Header.module.css"

export default function Header (){
    const isDeskTop = false;
return <div className={css.header}>
<Logo/>
{isDeskTop ? <div className="nav">
    <Navigation/>
<ShopNowBtn/>
</div> : <Modal/>}
</div>
}