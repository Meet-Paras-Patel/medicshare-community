import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, Package, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Mock data for demonstration
const mockMedicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    quantity: 20,
    expiryDate: "2025-06-15",
    location: "Downtown Medical Center",
    distance: "2.3 km",
    donor: "Sarah M.",
    status: "Available",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    quantity: 15,
    expiryDate: "2025-09-20",
    location: "Community Health Clinic",
    distance: "4.1 km",
    donor: "Dr. Johnson",
    status: "Available",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Ibuprofen 400mg",
    quantity: 30,
    expiryDate: "2025-12-10",
    location: "Central Pharmacy",
    distance: "1.8 km",
    donor: "Michael C.",
    status: "Available",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Insulin Glargine",
    quantity: 3,
    expiryDate: "2025-08-30",
    location: "Diabetes Care Center",
    distance: "5.2 km",
    donor: "Emma R.",
    status: "Available",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Metformin 500mg",
    quantity: 60,
    expiryDate: "2025-11-05",
    location: "Family Health Center",
    distance: "3.7 km",
    donor: "Dr. Patel",
    status: "Available",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Lisinopril 10mg",
    quantity: 25,
    expiryDate: "2025-07-22",
    location: "Heart Care Clinic",
    distance: "6.1 km",
    donor: "Robert K.",
    status: "Requested",
    image: "/placeholder.svg"
  }
];

const FindMedicine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredMedicines, setFilteredMedicines] = useState(mockMedicines);
  const { toast } = useToast();

  const handleSearch = () => {
    const filtered = mockMedicines.filter(medicine => {
      const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === "" || 
        medicine.location.toLowerCase().includes(locationFilter.toLowerCase());
      return matchesSearch && matchesLocation;
    });
    setFilteredMedicines(filtered);
  };

  const handleRequest = (medicineId: number) => {
    const medicine = mockMedicines.find(m => m.id === medicineId);
    toast({
      title: "Request Sent!",
      description: `Your request for ${medicine?.name} has been sent to the donor. You'll receive a confirmation shortly.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-primary text-primary-foreground";
      case "Requested":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-secondary/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Find Medicine
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Search for available medicines in your area. Connect with generous donors 
              who want to help those in need.
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8 shadow-lg border-primary/10">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search medicine name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 border-2 focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Location filter..."
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="pl-10 h-12 border-2 focus:border-primary"
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="h-12 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Medicines
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Available Medicines ({filteredMedicines.length})
            </h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" />
              <span>Showing medicines near you</span>
            </div>
          </div>

          {/* Medicine Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedicines.map((medicine) => {
              const daysUntilExpiry = getDaysUntilExpiry(medicine.expiryDate);
              
              return (
                <Card key={medicine.id} className="hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                        {medicine.name}
                      </h3>
                      <Badge className={getStatusColor(medicine.status)}>
                        {medicine.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Package className="w-4 h-4 mr-2 text-primary" />
                      <span>{medicine.quantity} units available</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-accent" />
                      <span>
                        Expires: {new Date(medicine.expiryDate).toLocaleDateString()}
                        <span className={`ml-2 font-medium ${
                          daysUntilExpiry < 30 ? 'text-destructive' : 
                          daysUntilExpiry < 90 ? 'text-accent' : 'text-primary'
                        }`}>
                          ({daysUntilExpiry} days)
                        </span>
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      <span>{medicine.location} • {medicine.distance}</span>
                    </div>
                    
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Donated by: <span className="font-medium text-foreground">{medicine.donor}</span>
                      </p>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button 
                      onClick={() => handleRequest(medicine.id)}
                      disabled={medicine.status === "Requested"}
                      className="w-full bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary disabled:from-muted disabled:to-muted"
                    >
                      {medicine.status === "Requested" ? "Already Requested" : "Request Medicine"}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* No Results */}
          {filteredMedicines.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No medicines found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or location filter
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setLocationFilter("");
                  setFilteredMedicines(mockMedicines);
                }}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Help Section */}
          <Card className="mt-12 bg-gradient-to-r from-primary-light/20 to-accent-light/20 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Can't find what you need?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our community is always growing. Create a request and we'll notify you when 
                someone lists the medicine you need.
              </p>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Create Medicine Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FindMedicine;