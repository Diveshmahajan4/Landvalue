"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {

    const router = useRouter();

    const handleClick = () => {
        router.push("/login");
    };

    return (
        <>
            <header className="container mx-auto px-4 py-4 ">
                <div className="flex items-center justify-between bg-white px-4 py-2 rounded-full">
                    <div className="flex items-center">
                        <a href="#" className="text-2xl font-bold text-green-600">
                            Landvalue
                        </a>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/properties" className="text-sm font-medium">
                            Properties
                        </Link>
                        <div className="relative group">
                            <Link href="/lists" className="text-sm font-medium flex items-center">
                                Lists <ChevronDown className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                        <Link href="/about" className="text-sm font-medium">
                            About
                        </Link>
                        <Link href="/contact" className="text-sm font-medium">
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full px-4"
                            onClick={handleClick}
                        >
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