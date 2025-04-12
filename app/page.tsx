import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import PropertyList from "@/components/PropertyList"

export default function Home() {
  return (
    <div className="min-h-[80vh]">
      <Hero/>
      <PropertyList/>
      <Footer/>
    </div>
  )
}
