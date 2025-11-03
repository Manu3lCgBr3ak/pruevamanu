import '../../GLobal.css'
import './HeroPage.css'

import StartSection from './sections/StartSection'
import Benefits from './sections/Benefits'
import Plans from './sections/Plans'
import Loyalty from './sections/Loyalty'
import Examples from './sections/Examples'

import Footer from '../../components/layout/Footer'

function HeroPage() {
  return (
    <>
    <StartSection/>
    <Benefits/>
    <Plans/>
    <Loyalty/>
    <Examples/>
    <Footer/>
    </>
  )
}

export default HeroPage
