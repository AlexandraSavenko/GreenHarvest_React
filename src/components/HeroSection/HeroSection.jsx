// import hero_1x_min from "../assets/hero_1x_min.jpg"
// import hero_2x_min from "../assets/hero_2x_min.jpg"
import css from "./HeroSection.module.css"

export default function HeroSection (){
    return <div className={css.hero}>
        <div className={css.heroContent}>
            <div className="wrapper">
        <h1 className={css.heroTitle}>ORGANIC VEGETABLES TO YOUR DIET TODAY!</h1>
    <p className={css.heroText}>Our expertly curated vegetable baskets are made with the freshest, highest quality vegetables available. Fresh Harvest Box has got you covered. Fresh, high-quality vegetables in expertly curated vegetable baskets delivered to you.</p>
        </div>
        <div  className={css.heroImage}></div>

    </div>
    {/* <img srcSet={`${hero_2x_min}, ${hero_1x_min}`} 
    src={hero_1x_min}
    alt="beautiful vegetables"
    width={200} /> */}
    </div>
}