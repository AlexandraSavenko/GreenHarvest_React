import css from "./DiscountSection.module.css"
export default function DiscountSection () {
    return <div className={css.discount}>
        <div className="wrapper">
        <h2><span className={css.span}>DISCOUNT UP TO 40%!</span ><br/>
        TASTE THE VITAMINS AND KEEP YOUR HEALTH</h2>
        </div>
    </div>
}