
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-bold">Tuma Ride</h3>
              <Badge variant="outline" className="text-xs border-white text-white">
                Kila Safari Ina Thamani
              </Badge>
            </Link>
            <p className="text-green-100 mb-4">
              Transforming movement into income opportunities across Kenya.
            </p>
            <div className="flex gap-3">
              <Facebook className="h-5 w-5 text-green-200 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-green-200 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-green-200 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-200 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-green-200 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-green-200 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-green-200">Package Delivery</li>
              <li className="text-green-200">Document Courier</li>
              <li className="text-green-200">Grocery Delivery</li>
              <li className="text-green-200">Inter-city Transport</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-200" />
                <span className="text-green-200">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-200" />
                <span className="text-green-200">+254 700 000 000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-200" />
                <span className="text-green-200">info@tumaride.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2024 Tuma Ride. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};
