// app/page.tsx
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import BlogSection from '@/components/BlogSection'
import ClientsSection from '@/components/ClientsSection'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import ProductsSection from '@/components/ProductsSection'
import GallerySection from '@/components/GallerySection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <ServicesSection />
      <ProductsSection />
      <BlogSection />
      <ClientsSection />
      <FooterSection />
    </main>
  )
}