import css from "./Navigation.module.css"
export default function Navigation ({className}){
    return <div className={css.navigation}>
    <a className={`${css.navLink} ${className}`} href="">how it works</a>
    <a className={`${css.navLink} ${className}`} href="">vegetables</a>
    <a className={`${css.navLink} ${className}`} href="">reviews</a>
</div>
}