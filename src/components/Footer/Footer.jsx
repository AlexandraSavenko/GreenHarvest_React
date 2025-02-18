import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
export default function Footer () {
    return <div className="footer">
        <div className="footerLogo">
            <Logo/>
            <p>Whether you are looking for a healthy snack or a thoughtful gift, our fruit baskets are the perfect choice.</p>
        </div>
    <Navigation/>
    <div className="contacts">
        <p>+380 (68) 443-94-26</p>
        <p>1678 S.Pioneer Road Salt Lake City UT 84104</p>
    </div>
    <div className="policy">
        <p>Privacy Policy / Cooking settings</p>
        <p>Green Harvest 2023</p>
    </div>
    </div>
}