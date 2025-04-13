import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#f0f7ed] py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="text-sm mb-8">
              <Link href="/" className="text-green-600 hover:underline">
                Home
              </Link>{" "}
              / <span>Contact</span>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in touch with our team</h1>
              <p className="text-lg text-gray-600">
                Have questions about investing with Livest? Our team is here to help you navigate your real estate
                investment journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Our team is available Monday through Friday, 9am to 5pm EST. We strive to respond to all inquiries
                  within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office Address</h3>
                      <p className="text-gray-600">
                        123 Investment Avenue, Suite 400
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone Number</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Address</h3>
                      <p className="text-gray-600">support@livest.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 5pm EST
                        <br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What is your message about?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Enter your message here" rows={5} />
                  </div>

                  <Button className="w-full bg-green-500 hover:bg-green-600">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-[#f0f7ed]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

              <div className="space-y-6">
                {[
                  {
                    question: "How do I start investing with Livest?",
                    answer:
                      "Getting started is easy! Simply create an account, complete your investor profile, browse available properties, and make your first investment. Our minimum investment starts at just $500.",
                  },
                  {
                    question: "How are returns distributed to investors?",
                    answer:
                      "Returns are typically distributed quarterly, directly to your bank account. You can view your earnings and track performance in your investor dashboard.",
                  },
                  {
                    question: "Is real estate investing with Livest safe?",
                    answer:
                      "While all investments carry risk, we thoroughly vet each property and provide transparent information about potential risks and returns. We also diversify investments across multiple properties to help mitigate risk.",
                  },
                  {
                    question: "Can I sell my investment before the property is sold?",
                    answer:
                      "Yes, we offer a secondary marketplace where you can list your investment shares for sale to other Livest investors, subject to certain conditions and timeframes.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don&apos;t see your question here?{" "}
                  <Link href="#" className="text-green-600 font-medium hover:underline">
                    Check our full FAQ
                  </Link>{" "}
                  or contact us directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-6">
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
      </main>

      <Footer />
    </div>
  )
}
