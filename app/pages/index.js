import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/home/hero'
import HowWeWork from '@/components/home/howWeWork'
import Services from '@/components/home/services'
import Pricing from '@/components/home/pricing'
import BecomeMember from '@/components/home/becomeMember'
import FAQs from '@/components/home/faqs'
import Location from '@/components/home/location'
import HomeFooter from '@/components/home/homeFooter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <main >
        <HeroSection />
        <HowWeWork />
        <Services />
        <Pricing />
        <BecomeMember />
        <FAQs />
        <Location />
        <HomeFooter />
      </main>
    </>
  )
}
