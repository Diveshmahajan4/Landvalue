import { ArrowLeft, ArrowRight, Bath, Bed, MapPin, Ruler } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface Property {
    id: number
    title: string
    location: string
    city: string
    state: string
    sqft: number
    beds: number
    baths: number
    price: number
    roi: number
    image: string
}

export default function PropertyList() {
    const properties: Property[] = [
        {
            id: 1,
            title: "Luxury high-rise apartment with balcony",
            location: "New York, New York",
            city: "New York",
            state: "New York",
            sqft: 1500,
            beds: 3,
            baths: 2,
            price: 5200,
            roi: 60,
            image: "/h2.jpg",
        },
        {
            id: 2,
            title: "Spacious suburban home with backyard",
            location: "Los Angeles, California",
            city: "Los Angeles",
            state: "California",
            sqft: 2200,
            beds: 4,
            baths: 2,
            price: 4100,
            roi: 50,
            image: "/h1.jpg",
        },
        {
            id: 3,
            title: "Modern townhouse in a gated community",
            location: "Miami, Florida",
            city: "Miami",
            state: "Florida",
            sqft: 1800,
            beds: 3,
            baths: 2,
            price: 3750,
            roi: 58,
            image: "/h3.jpg",
        },
        {
            id: 4,
            title: "Cozy family home near top schools",
            location: "Seattle, Washington",
            city: "Seattle",
            state: "Washington",
            sqft: 1600,
            beds: 4,
            baths: 2,
            price: 3200,
            roi: 53,
            image: "/h4.jpg",
        },
        {
            id: 5,
            title: "Chic loft in the heart of downtown",
            location: "Chicago, Illinois",
            city: "Chicago",
            state: "Illinois",
            sqft: 1100,
            beds: 2,
            baths: 2,
            price: 3450,
            roi: 57,
            image: "/h5.jpg",
        },
        {
            id: 6,
            title: "Elegant waterfront condo with views",
            location: "Miami, Florida",
            city: "Miami",
            state: "Florida",
            sqft: 1400,
            beds: 2,
            baths: 2,
            price: 4100,
            roi: 59,
            image: "/h6.jpg",
        },
    ]
    return (
        <section className="mb-8 mt-60 mx-20 md:mx-30 lg:mx-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className=" group bg-white rounded-3xl overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 px-2 pt-2"
                    >
                        <div className="relative h-56 overflow-hidden rounded-3xl px-2 pt-2">
                            <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-xl line-clamp-2 ">{property.title}</h3>
                            <div className="flex items-center text-gray-500 text-sm mt-2">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{property.location}</span>
                            </div>
                            <div className="flex justify-between mt-4 text-sm">
                                <div className="flex items-center">
                                    <Ruler className="h-4 w-4 mr-1" />
                                    <span>{property.sqft.toLocaleString()} sq. ft.</span>
                                </div>
                                <div className="flex items-center">
                                    <Bed className="h-4 w-4 mr-1" />
                                    <span>{property.beds} Bed</span>
                                </div>
                                <div className="flex items-center">
                                    <Bath className="h-4 w-4 mr-1" />
                                    <span>{property.baths} Bath</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <span className="text-green-600 font-bold">${property.price.toLocaleString()}</span>
                                    <span className="text-green-600 ml-1">({property.roi}%)</span>
                                </div>
                                <Button variant="outline" size="sm" className="text-xs">
                                    Invest now
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-8">
                <div className="flex space-x-1">
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-green-500 text-white hover:bg-green-600">
                        1
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                        2
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                        3
                    </Button>
                    <span className="flex items-center px-2">...</span>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                        8
                    </Button>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-green-500 text-white hover:bg-green-600">
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}