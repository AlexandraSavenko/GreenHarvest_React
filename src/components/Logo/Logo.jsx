import LogoBox from "../assets/logo.svg"
import css from "./Logo.module.css"
export default function Logo (){
    return <div className={css.logoWrap}>
        <LogoBox className={css.logoBox}/>
        </div>
}