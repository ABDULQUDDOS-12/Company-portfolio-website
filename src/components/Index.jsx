import React from 'react'
import Header from './Header/Index'
import EmpoweringBuissness from './Empowering Buissness/Index'
import OnlineBuissness from './Online Buissness/Index'
import PortfolioSection from './Portfolio/Index'
import SectionContainer from './Section Container/Index'
import WebPackages from './Web Packages/Index'
import PricingCards from './Pricing Cards/Index'
import PowerCompany from './powerCompany/Index'
import ContactDetails from './Contact Details/Index'
import Branding from './Branding/Index'
import HelpSection from './Help Section/Index'
import ContactUs from './Contact Us/Index'
import Footer from './Footer/Index'
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
            <PowerCompany/>
            <ContactDetails/>
            <Branding/>
            <HelpSection/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Index