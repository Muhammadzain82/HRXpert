import React from 'react'
 import HowItWork from '@/app/components/howitwork'
  import Hero from '@/app/components/hero'
import Company from '@/app/components/company'
import Empower from '@/app/components/power'


 import FAQSection from '@/app/components/Faq'
import Pricing from '@/app/components/pricing'
import Footer from '@/app/components/footer'



const page = () => {
  return (
    <div>
          <Hero/>
          <Company/> 
         <Empower/>
         <HowItWork/>
         <FAQSection/>
         <Pricing/>
       <Footer/>
    </div>
  )
}

export default page