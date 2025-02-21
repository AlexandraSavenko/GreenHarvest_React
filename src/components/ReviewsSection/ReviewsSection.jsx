import css from "./ReviewSection.module.css"
export default function ReviewsSection () {
    return <div className={css.reviews}>
        <h2>REVIEWS FROM OUR <span>CUSTOMERS</span></h2>
        <p>Words of our customers: impressions and opinions about the
             quality of our services and the freshness of our products.</p>
    <ul>
        <li>
            <img src="" alt="" />
            <h3>John Wax</h3>
            <p>These vegetables are my secret to delicious and healthy meals. 
                The quality is always the highest level, the aroma and taste are enehanting. I advise every fan of real products!</p>
        </li>
        <li>
            <img src="" alt="" />
            <h3>Victoria Romashenko</h3>
            <p>I love how fast and fresh the vegetables are delivered. 
                Salads always turn out so appetizing and aoups are real masterpieces. The quality is impeccable!</p>
        </li>
        <li>
            <img src="" alt="" />
            <h3>Ihor Trachuk</h3>
            <p>Recently tried my fresh tomatoes and peppers amazing! 
                The authenticity of the taste, as if from the garden 
                directly to my table. It is now my main vegetable supplier.</p>
        </li>
    </ul>
    </div>
}