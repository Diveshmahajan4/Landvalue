import { ChevronDown, MapPin, Search } from "lucide-react";
import { Button } from "./ui/button";

export default function SearchForm(){
    return (
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg p-6 md:p-8 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter address"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white">
                  <option>Location</option>
                </select>
              </div>
              <div className="relative">
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white">
                  <option>Property type</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="mt-4 flex flex-col md:flex-row items-center justify-between">
              <Button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg">
                Search Property
              </Button>
              <a href="#" className="mt-3 md:mt-0 text-sm text-gray-500 flex items-center">
                <span className="mr-2">Advanced Search</span>
              </a>
            </div>
          </div>
    );
}