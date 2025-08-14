import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoIcon} alt="MedicShelf" className="h-10 w-10 rounded-lg object-cover" />
              <span className="text-xl font-bold">MedicShelf</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Connecting communities to reduce medicine waste and save lives. 
              Together, we ensure no medicine goes unused while helping those in need.
            </p>
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
              <Heart className="w-4 h-4 text-accent" />
              <span>Reduce Waste. Save Lives.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/find-medicine" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Find Medicine
                </Link>
              </li>
              <li>
                <Link to="/list-medicine" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  List Medicine
                </Link>
              </li>
              <li>
                <Link to="/verification" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 MedicShelf. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/60">
              <Mail className="w-4 h-4" />
              <span>help@medicshelf.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/60">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;