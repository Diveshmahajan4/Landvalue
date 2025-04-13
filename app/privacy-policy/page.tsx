import Link from "next/link"
import { Shield, Lock, FileText } from "lucide-react"
import Header from "@/components/Header"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#f0f7ed] py-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="text-sm mb-8">
              <Link href="/" className="text-green-600 hover:underline">
                Home
              </Link>{" "}
              / <span>Privacy Policy</span>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-lg text-gray-600">
                At Livest, we take your privacy seriously. This policy outlines how we collect, use, and protect your
                personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-8 mb-12">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="font-medium">Data Protection</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="font-medium">Secure Encryption</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="font-medium">Clear Policies</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Last Updated: April 13, 2025</h2>

                <p>
                  This Privacy Policy describes how Livest (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot; ) collects, uses, and discloses your
                  personal information when you visit our website, use our mobile application, or interact with our
                  services.
                </p>

                <h3>Information We Collect</h3>

                <p>We collect several types of information from and about users of our Services, including:</p>

                <ul>
                  <li>
                    <strong>Personal Information:</strong> This includes your name, email address, postal address, phone
                    number, date of birth, social security number or tax ID (for investment and regulatory purposes),
                    and financial information such as bank account details.
                  </li>
                  <li>
                    <strong>Investment Information:</strong> Details about your investment preferences, risk tolerance,
                    investment history, and transaction data.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you interact with our Services, including
                    browsing history, search queries, and feature usage patterns.
                  </li>
                  <li>
                    <strong>Device Information:</strong> Data about the device you use to access our Services, including
                    IP address, browser type, operating system, and mobile device identifiers.
                  </li>
                </ul>

                <h3>How We Use Your Information</h3>

                <p>We use the information we collect to:</p>

                <ul>
                  <li>Provide, maintain, and improve our Services</li>
                  <li>Process your investments and transactions</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Communicate with you about your account, investments, and our Services</li>
                  <li>Personalize your experience and deliver content relevant to your interests</li>
                  <li>Detect, prevent, and address technical issues, fraud, or other illegal activities</li>
                </ul>

                <h3>Information Sharing and Disclosure</h3>

                <p>We may share your personal information with:</p>

                <ul>
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as
                    payment processing, data analysis, email delivery, and customer service.
                  </li>
                  <li>
                    <strong>Business Partners:</strong> Companies with whom we partner to offer products or services.
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law, regulation, or legal process.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.
                  </li>
                </ul>

                <h3>Your Rights and Choices</h3>

                <p>
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>

                <ul>
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate or incomplete information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction or objection to certain processing activities</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>

                <p>
                  To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section
                  below.
                </p>

                <h3>Data Security</h3>

                <p>
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute
                  security.
                </p>

                <h3>Data Retention</h3>

                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                  Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>

                <h3>Children&apos;s Privacy</h3>

                <p>
                  Our Services are not intended for children under the age of 18. We do not knowingly collect personal
                  information from children under 18. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us.
                </p>

                <h3>Changes to This Privacy Policy</h3>

                <p>
                  We may update this Privacy Policy from time to time. The updated version will be indicated by an
                  updated &quot;Last Updated&quot; date and will be effective as soon as it is accessible. We encourage you to
                  review this Privacy Policy frequently to stay informed about how we are protecting your information.
                </p>

                <h3>Contact Us</h3>

                <p>
                  If you have any questions or concerns about this Privacy Policy or our privacy practices, please
                  contact us at:
                </p>

                <p>
                  Email: privacy@livest.com
                  <br />
                  Phone: (555) 123-4567
                  <br />
                  Address: 123 Investment Avenue, Suite 400, New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  )
}
