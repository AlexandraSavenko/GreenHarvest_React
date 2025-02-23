import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import css from "./Footer.module.css"
export default function Footer () {
    return <div className={css.footer}>
         <div className="wrapper">
        <div className="footerLogo">
            <Logo/>
            <p className={css.footerText}>Whether you are looking for a healthy snack or a thoughtful gift, our fruit baskets are the perfect choice.</p>
        </div>
    <Navigation className={css.footerNav}/>
    <div className={css.footerContacts}>
        <p>+380 (68) 443-94-26</p>
        <p>1678 S.Pioneer Road Salt Lake City UT 84104</p>
    </div>
    <div className={css.footerPolicy}>
        <p>Privacy Policy / Cooking settings</p>
        <p>Green Harvest 2023</p>
    </div>
    </div>
    </div>
}