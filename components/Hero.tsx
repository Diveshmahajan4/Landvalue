import Image from "next/image";
import SearchForm from "./SearchForm";
import Header from "./Header";

export default function Hero() {
    return (
        <main className="relative h-[80vh] mb-10 bg-[#e8f0e4]">
            <Header/>
            {/* Hero Section */}
            <div className="relative h-[80vh] overflow-hidden">
                {/* Background Images */}
                <div className="absolute left-0 bottom-0 w-1/3 h-full z-0 hidden md:block">
                    <Image
                        src="/right-rbg.png"
                        alt="Modern blue glass building"
                        fill
                        className="object-cover object-center rounded-tr-3xl"
                    />
                </div>
                <div className="absolute right-0 bottom-0 w-1/3 h-full z-0 hidden md:block">
                    <Image
                        src="/left1-rbg.png"
                        alt="Modern copper building"
                        fill
                        className="object-cover object-center rounded-tl-3xl"
                    />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center relative z-10">
                <div className="flex flex-col items-center justify-center py-12 md:py-24 relative z-10">
                    {/* Breadcrumb */}
                    <div className="text-sm mb-6 self-start md:self-center bg-white px-2 py-1 rounded-full">
                        <span className="text-green-600">Home</span> / <span>Properties</span>
                    </div>
                    {/* Hero Content */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Find your perfect investment properties
                        </h1>
                        <p className="text-gray-600 text-xl text-semibold max-w-2xl mx-auto">
                            Explore a selection of high-value real estate opportunities designed for financial growth and stability
                        </p>
                    </div>
                </div>
                </div>
            </div>

            {/* Floating Search Bar */}
            <div className="relative z-20 -mt-28 px-4">
                <div className="max-w-4xl mx-auto ">
                    <SearchForm />
                </div>
            </div>
        </main>

    );
}