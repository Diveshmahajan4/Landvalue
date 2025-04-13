import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function CTA2(){
    return(
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#f0f7ed] to-[#e0f0e0]">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-2 bg-white rounded-full mb-6">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm font-medium">We typically respond within 24 hours</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your investment journey?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of investors who are already building wealth through real estate with Livest.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-2">Create Account</Button>
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-2">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>
    );
}