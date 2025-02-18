import Navigation from "../Navigation/Navigation";
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";

export default function Modal () {
    return <div className="modal">
        <button>X</button>
        <Navigation/>
        <ShopNowBtn/>
    </div>
}