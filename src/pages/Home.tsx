import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Search, CheckCircle, Users, Shield, Quote, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-medicines.jpg";
import howItWorksImage from "@/assets/how-it-works.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-primary-light/20 to-accent-light/30 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Reduce Waste.
                <span className="text-primary block">Save Lives.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Connect with your community to share unused medicines and help those in need. 
                Every pill saved is a life potentially helped.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-lg px-8 py-4 h-auto">
                  <Link to="/list-medicine">
                    <Plus className="w-5 h-5 mr-2" />
                    List Medicine
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto">
                  <Link to="/find-medicine">
                    <Search className="w-5 h-5 mr-2" />
                    Find Medicine
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Hands sharing medicine" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and effective way to share medicines in your community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src={howItWorksImage} 
                alt="How MedicShelf works process" 
                className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">List Your Medicine</h3>
                  <p className="text-muted-foreground">
                    Upload details of your unused, sealed medicines with photos and expiry dates.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Verify & Approve</h3>
                  <p className="text-muted-foreground">
                    Our verification process ensures medicine safety and authenticity before sharing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Help Someone</h3>
                  <p className="text-muted-foreground">
                    Connect with NGOs, health workers, and individuals who need the medicines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Verified Safe</h3>
                <p className="text-muted-foreground">
                  All medicines are verified for safety and authenticity
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Community Driven</h3>
                <p className="text-muted-foreground">
                  Built by and for communities who care about each other
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Secure Platform</h3>
                <p className="text-muted-foreground">
                  Your privacy and data security are our top priorities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from people making a difference in their communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4">
                  "MedicShelf helped me find insulin when I couldn't afford it. 
                  This platform is a lifesaver for people like me."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Diabetes Patient</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4">
                  "As a community health worker, MedicShelf helps me reach 
                  more families in need. The verification process is excellent."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Dr. Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Community Health Worker</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4">
                  "I had leftover antibiotics after my treatment. Instead of 
                  throwing them away, I helped someone in my neighborhood."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Emma Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Medicine Donor</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of community members who are reducing waste and saving lives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4 h-auto">
              <Link to="/list-medicine">
                Start Donating Today
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 h-auto">
              <Link to="/find-medicine">
                Find Medicine Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;