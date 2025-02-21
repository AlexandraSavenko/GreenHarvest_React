import OrderForm from "../OrderForm/OrderForm"
import HarvestBox_1x_min from "../assets/HarvestBox_1x_min.jpg"
import HarvestBox_2x_min from "../assets/HarvestBox_2x_min.jpg"
import css from "./HarvestBoxSection.module.css"

export default function HarvestBoxSection (){
    return <div className={css.harvestBox}>
        <div className="wrapper">
            <h2>FRESH <span>HARVEST</span> BOX HAS GOT YOU COVERED</h2>
    <p>Our boxes are packed with delicious, nutritious vegetables, perfect for anyone looking to eat healthier or support local farmers. Order your box today and start enjoying the best nature has to offer!</p>
    <OrderForm/>
    <div className={css.socMedia}>
        <img srcSet={`${HarvestBox_2x_min}, ${HarvestBox_1x_min}`} src={HarvestBox_1x_min} alt="a woman is squizing lemon juice into a jar or some vegetables" width={200}/>
        <p>Follow us on our social networks:</p>
        <ul className={css.socMediaLinks}>
            <li><a href="">instagram</a></li>
            <li><a href="">facebook</a></li>
            <li><a href="">youtube</a></li>
        </ul>
        
        
        
    </div>
    </div>
        
    </div>
}