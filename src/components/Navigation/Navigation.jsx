import css from "./Navigation.module.css"
export default function Navigation ({className}){
    return <div className={css.navigation}>
    <a className={` ${className}`} href="">how it works</a>
    <a className={` ${className}`} href="">vegetables</a>
    <a className={` ${className}`} href="">reviews</a>
</div>
}