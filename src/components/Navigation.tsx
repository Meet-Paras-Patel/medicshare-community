import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Plus, Search, User, Heart } from "lucide-react";
import logoIcon from "@/assets/logo-icon.jpg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={logoIcon} alt="MedicShelf" className="h-10 w-10 rounded-lg object-cover" />
            <span className="text-xl font-bold text-primary">MedicShelf</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/find-medicine" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/find-medicine') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Find Medicine
            </Link>
            <Link 
              to="/verification" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/verification') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              How it Works
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/list-medicine">
                <Plus className="w-4 h-4 mr-2" />
                List Medicine
              </Link>
            </Button>
            <Button variant="default" asChild className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary">
              <Link to="/login">
                <User className="w-4 h-4 mr-2" />
                Login
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className={`block py-2 text-base font-medium transition-colors ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/find-medicine" 
              className={`block py-2 text-base font-medium transition-colors ${
                isActive('/find-medicine') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Find Medicine
            </Link>
            <Link 
              to="/verification" 
              className={`block py-2 text-base font-medium transition-colors ${
                isActive('/verification') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </Link>
            <div className="pt-4 space-y-3 border-t border-border">
              <Button variant="outline" asChild className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/list-medicine" onClick={() => setIsMenuOpen(false)}>
                  <Plus className="w-4 h-4 mr-2" />
                  List Medicine
                </Link>
              </Button>
              <Button variant="default" asChild className="w-full bg-gradient-to-r from-primary to-primary-hover">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;