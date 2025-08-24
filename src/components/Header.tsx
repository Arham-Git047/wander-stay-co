import { Link } from "react-router-dom";
import { Search, Menu, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              airbnb<span className="text-coral">clone</span>
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center border border-border rounded-full shadow-sm hover:shadow-card transition-shadow duration-200">
            <button className="px-6 py-3 text-sm font-medium border-r border-border hover:bg-gray-50 rounded-l-full">
              Anywhere
            </button>
            <button className="px-6 py-3 text-sm font-medium border-r border-border hover:bg-gray-50">
              Any week
            </button>
            <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-r-full">
              Add guests
            </button>
            <div className="p-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-full">
                <Search className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:flex items-center gap-2 font-medium">
              Airbnb your home
            </Button>
            
            <Link to="/contact-us">
              <Button variant="ghost" className="hidden md:flex items-center gap-2 font-medium">
                Contact Us
              </Button>
            </Link>
            
            <Button variant="ghost" size="icon">
              <Globe className="h-4 w-4" />
            </Button>

            <div className="flex items-center border border-border rounded-full p-1 hover:shadow-card transition-shadow duration-200">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;