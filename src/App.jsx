import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import OrderStepsSection from './components/OrderStepsSection/OrderStepsSection'
import DiscountSection from './components/DiscountSection/DiscountSection'
import OrganicVegeSection from './components/OrganicVegeSection/OrganicVegeSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'
import HarvestBoxSection from './components/HarvestBoxSection/HarvestBoxSection'
import Footer from './components/Footer/Footer'
import './App.css'
import Modal from './components/Modal/Modal'

function App() {
  const modalIsOpen = false;
return <div>
<Header/>
{modalIsOpen && <Modal/>}
<HeroSection/>
<OrderStepsSection/>
<DiscountSection/>
<OrganicVegeSection/>
<ReviewsSection/>
<HarvestBoxSection/>
<Footer/>
</div>
}

export default App
