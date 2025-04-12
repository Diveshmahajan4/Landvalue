import { Button } from "./ui/button";

export default function CTA() { 
    return (
        <div className="bg-[#e8f0e4] py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to find your dream property?</h2>
                <p className="text-lg mb-6">Join us today and start your journey towards homeownership!</p>
                <Button variant="default" size="lg">Get Started</Button>
            </div>
        </div>
    );
}