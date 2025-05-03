// app/page.tsx
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import BlogSection from '@/components/BlogSection'
import ClientsSection from '@/components/ClientsSection'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import ProductsSection from '@/components/ProductsSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <BlogSection />
      <ClientsSection />
      <FooterSection />
    </main>
  )
}