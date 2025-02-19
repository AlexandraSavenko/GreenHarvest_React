import HamburgerComponent from "../HamburgerComponent/HamburgerComponent";
import Navigation from "../Navigation/Navigation";
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";

export default function Modal ({isOpen, setOpen}) {
    console.log(isOpen)
    return <div className="modal">
        <HamburgerComponent size={24} toggled={isOpen} toggle={setOpen}/>
        <Navigation/>
        <ShopNowBtn/>
    </div>
}