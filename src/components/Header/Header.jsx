import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
export default function Header (){
    const isDeskTop = false;
return <div className="header">
<Logo/>
{isDeskTop ? <div className="nav">
    <Navigation/>
<ShopNowBtn/>
</div> : <button className="getModal">Menu</button>}
    
</div>
}