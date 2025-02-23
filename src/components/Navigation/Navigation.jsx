import css from "./Navigation.module.css"
export default function Navigation (){
    return <div className={css.navigation}>
    <a className={css.navLink} href="">how it works</a>
    <a className={css.navLink} href="">vegetables</a>
    <a className={css.navLink} href="">reviews</a>
</div>
}