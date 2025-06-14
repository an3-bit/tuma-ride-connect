
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Package, Users } from "lucide-react";

interface NavigationProps {
  onSenderClick?: () => void;
  onMoverClick?: () => void;
}

export const Navigation = ({ onSenderClick, onMoverClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-green-800">Tuma Ride</h1>
            <Badge variant="outline" className="text-xs border-green-600 text-green-600">
              Kila Safari Ina Thamani
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-600 hover:text-green-600 transition-colors ${
                  location.pathname === item.path ? "text-green-600 font-medium" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onSenderClick}
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Package className="mr-2 h-4 w-4" />
              Send Package
            </Button>
            <Button
              size="sm"
              onClick={onMoverClick}
              className="bg-green-600 hover:bg-green-700"
            >
              <Users className="mr-2 h-4 w-4" />
              Earn Money
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-600 hover:text-green-600 transition-colors ${
                    location.pathname === item.path ? "text-green-600 font-medium" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    onSenderClick?.();
                    setIsMenuOpen(false);
                  }}
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Send Package
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    onMoverClick?.();
                    setIsMenuOpen(false);
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Earn Money
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
