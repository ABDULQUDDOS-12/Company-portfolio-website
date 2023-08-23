import React from 'react'
import Header from './Header/Index'
import EmpoweringBuissness from './Empowering Buissness/Index'
import OnlineBuissness from './Online Buissness/Index'
import PortfolioSection from './Portfolio/Index'
import SectionContainer from './Section Container/Index'
import WebPackages from './Web Packages/Index'
import PricingCards from './Pricing Cards/Index'
const Index = () => {
    return (
        <div>
            <Header/>
            <EmpoweringBuissness/>
            <OnlineBuissness/>
            <PortfolioSection/>
            <SectionContainer/>
            <WebPackages/>
            <PricingCards/>
        </div>
    )
}

export default Index