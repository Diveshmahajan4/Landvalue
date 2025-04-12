import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <>
            <header className="container mx-auto px-4 py-4 ">
                <div className="flex items-center justify-between bg-white px-4 py-2 rounded-full">
                    <div className="flex items-center">
                        <a href="#" className="text-2xl font-bold text-green-600">
                            livest
                        </a>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <a href="#" className="text-sm font-medium">
                            Home
                        </a>
                        <a href="#" className="text-sm font-medium">
                            Properties
                        </a>
                        <div className="relative group">
                            <a href="#" className="text-sm font-medium flex items-center">
                                Lists <ChevronDown className="ml-1 h-4 w-4" />
                            </a>
                        </div>
                        <a href="#" className="text-sm font-medium">
                            About
                        </a>
                        <a href="#" className="text-sm font-medium">
                            Contact
                        </a>
                    </nav>
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="rounded-full px-4">
                            Log in
                        </Button>
                        <Button size="sm" className="rounded-full px-4 bg-green-600 hover:bg-green-700">
                            Join now
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
}