import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm mb-8">
          <Link href="/" className="text-green-600 hover:underline">
            Home
          </Link>{" "}
          / <span>Log in</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Log in & grow your wealth</h1>

            <div className="max-w-md">
              <h2 className="text-xl font-semibold mb-6">Log in now</h2>

              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email for responses" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Input id="password" type="password" placeholder="Enter your password" className="w-full pr-10" />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        aria-label="Toggle password visibility"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label htmlFor="remember" className="text-sm">
                        Remember me
                      </label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-gray-600 hover:underline">
                      Forgot Password?
                    </Link>
                  </div>

                  <Button className="w-full bg-green-500 hover:bg-green-600">Log in</Button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or log in with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 border rounded-md py-2 px-4 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                          <path
                            fill="#4285F4"
                            d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                          />
                          <path
                            fill="#34A853"
                            d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                          />
                          <path
                            fill="#EA4335"
                            d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                          />
                        </g>
                      </svg>
                      <span>Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 border rounded-md py-2 px-4 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
                      </svg>
                      <span>Apple</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative rounded-lg overflow-hidden h-[500px]">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Construction workers reviewing plans"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="text-sm font-medium">Over 5000+ reviews</div>
              <div className="flex -space-x-2 mt-1">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-300"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-400"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
