import Banner from './components/Banners/Banners';
import Header from './components/Header/Header';
import TopHeader from './components/Header/TopHeader/TopHeader'
import Hero from './components/Hero/Hero';
import LivingBanner from './components/LivingBanner/LivingBanner';
import MainContent from './components/MainContent/MainContent';
import ImpactSection from './components/ImpactSection/ImpactSection';
import Footer from './components/Footer/Footer';

function App() {
 

  return (
    <>
      <TopHeader/>
      <Header/>
      <Hero/>
      <Banner/>
      <MainContent/>
      <ImpactSection/>
      <LivingBanner/>
      <Footer/>
    </>
  )
}

export default App
