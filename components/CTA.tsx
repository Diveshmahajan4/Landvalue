import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() { 
    return (
        <section className="w-full py-20 bg-gradient-to-br from-[#f0f7ed] to-[#e0f0e0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-2xl mx-auto">Invest in real estate with confidence</h2>
          <Link href="/properties">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full text-xl font-medium h-auto">
              Invest Now
            </Button>
          </Link>
        </div>
      </section>
    );
}