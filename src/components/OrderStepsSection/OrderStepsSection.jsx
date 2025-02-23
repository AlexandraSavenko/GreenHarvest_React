import OrderSteps_1x_min from "../assets/OrderSteps_1x_min.jpg"
import OrderSteps_2x_min from "../assets/OrderSteps_2x_min.jpg"
import css from "./OrderStepsSection.module.css"
export default function OrderStepsSection () {
    return <div className={css.orderSteps}>
        <div className="wrapper">
            <div className={css.imgWrapper}>
            <img className={css.orderStepImg} srcSet={`${OrderSteps_2x_min}, ${OrderSteps_1x_min}`}
         src={OrderSteps_1x_min} alt="a happy woman is slicing an apple" width={200} />
         </div>
        <h2>TO ORDER YOUR <span>VEGETABLE</span> BASKET, SIMPLY FOLLOW THESE <span>EASY STEPS</span></h2>
    <p className={css.orderStepsText}>Our baskets are assembled with care and delivered straight to your doorstep, so you can enjoy the taste of fresh fruit without ever leaving your home.</p>
    <ul className={css.orderStepslist}>
        <li>
            <div className={css.orderStepNum}><span>1</span></div>
            <p>Just choose <span>the vegetable</span> you want to order by clicking on the checkboxes <span>next to it</span> .</p>
        </li>
        <li>
            <div className={css.orderStepNum}><span>2</span></div>
            <p>Click on <span>the basket</span>  and fill out the form.</p>
        </li>
        <li>
            <div className={css.orderStepNum}><span>3</span></div>
            <p>Sit back and relax! Your <span>fresh vegetable</span> basket will be delivered.</p>
        </li>
    </ul>
    </div>
        
    </div>
}