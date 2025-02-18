import OrderSteps_1x_min from "../assets/OrderSteps_1x_min.jpg"
import OrderSteps_2x_min from "../assets/OrderSteps_2x_min.jpg"

export default function OrderStepsSection () {
    return <div className="orderSteps">
        <img srcSet={`${OrderSteps_2x_min}, ${OrderSteps_1x_min}`}
         src={OrderSteps_1x_min} alt="a happy woman is slicing an apple" width={200} />
        <h2>TO ORDER YOUR <span>VEGETABLE</span> BASKET, SIMPLY FOLLOW THESE <span>EASY STEPS</span></h2>
    <p>Our baskets are assembled with care and delivered straight to your doorstep, so you can enjoy the taste of fresh fruit without ever leaving your home.</p>
    <ul>
        <li>
            <p>Just choose <span>the vegetable</span> you want to order by clicking on the checkboxes <span>next to it</span> .</p>
        </li>
        <li>
            <p>Click on <span>the basket</span>  and fill out the form.</p>
        </li>
        <li>
            <p>Sit back and relax! Your <span>fresh vegetable</span> basket will be delivered.</p>
        </li>
    </ul>
    </div>
}