import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, FileText, Shield, Users, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Mock verification data
const verificationSteps = [
  {
    id: 1,
    title: "Prescription Verification",
    description: "Our medical team reviews prescription documents and medicine authenticity",
    icon: FileText,
    status: "completed",
    details: [
      "Verify prescription authenticity",
      "Check medicine-prescription match",
      "Validate prescribing authority"
    ]
  },
  {
    id: 2,
    title: "Expiry Date Check", 
    description: "Ensuring medicines have sufficient remaining shelf life for safe use",
    icon: Clock,
    status: "completed", 
    details: [
      "Minimum 3 months validity required",
      "Storage condition verification", 
      "Manufacturing date validation"
    ]
  },
  {
    id: 3,
    title: "Final Approval",
    description: "Final review and approval for listing on the platform",
    icon: CheckCircle,
    status: "in-progress",
    details: [
      "Complete profile review",
      "Quality assurance check",
      "Platform listing approval"
    ]
  }
];

const mockRequests = [
  {
    id: "REQ001",
    medicineName: "Paracetamol 500mg",
    submittedDate: "2024-01-15",
    status: "approved",
    currentStep: 3,
    estimatedCompletion: "2024-01-16"
  },
  {
    id: "REQ002", 
    medicineName: "Amoxicillin 250mg",
    submittedDate: "2024-01-14",
    status: "in-review",
    currentStep: 2,
    estimatedCompletion: "2024-01-17"
  },
  {
    id: "REQ003",
    medicineName: "Insulin Glargine",
    submittedDate: "2024-01-13", 
    status: "pending",
    currentStep: 1,
    estimatedCompletion: "2024-01-18"
  }
];

const Verification = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-primary text-primary-foreground";
      case "in-review":
        return "bg-accent text-accent-foreground";
      case "pending":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStepStatus = (stepId: number, currentStep: number, overallStatus: string) => {
    if (overallStatus === "approved") return "completed";
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "in-progress";
    return "pending";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-secondary/30 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Verification Process
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We ensure every medicine on our platform is safe, authentic, and properly verified. 
              Here's how our comprehensive verification process works.
            </p>
          </div>

          {/* Verification Steps Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              How We Verify Medicines
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {verificationSteps.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = step.status === "completed";
                const isInProgress = step.status === "in-progress";
                
                return (
                  <Card 
                    key={step.id} 
                    className={`relative border-2 transition-all duration-300 ${
                      isCompleted ? 'border-primary bg-primary-light/20' :
                      isInProgress ? 'border-accent bg-accent-light/20' :
                      'border-border hover:border-primary/50'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-full ${
                          isCompleted ? 'bg-primary text-primary-foreground' :
                          isInProgress ? 'bg-accent text-accent-foreground' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                          Step {index + 1}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full mr-3 ${
                              isCompleted ? 'bg-primary' :
                              isInProgress ? 'bg-accent' :
                              'bg-muted-foreground'
                            }`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      
                      {isCompleted && (
                        <div className="absolute -top-3 -right-3 bg-primary rounded-full p-2">
                          <CheckCircle className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Your Requests Status */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Your Verification Requests
            </h2>
            
            <div className="space-y-6">
              {mockRequests.map((request) => (
                <Card key={request.id} className="border-primary/10 hover:border-primary/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-semibold text-foreground">
                            {request.medicineName}
                          </h3>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Request ID: {request.id} • Submitted: {new Date(request.submittedDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Estimated completion: {new Date(request.estimatedCompletion).toLocaleDateString()}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {verificationSteps.map((step, idx) => {
                          const stepStatus = getStepStatus(step.id, request.currentStep, request.status);
                          const Icon = step.icon;
                          
                          return (
                            <div key={step.id} className="flex flex-col items-center space-y-2">
                              <div className={`p-2 rounded-full border-2 ${
                                stepStatus === "completed" ? 'bg-primary border-primary text-primary-foreground' :
                                stepStatus === "in-progress" ? 'bg-accent border-accent text-accent-foreground' :
                                'bg-muted border-muted text-muted-foreground'
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="text-xs text-muted-foreground hidden lg:block">
                                {step.title.split(' ')[0]}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Security & Trust Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-gradient-to-br from-primary-light/10 to-primary-light/5">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Security & Safety</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>All medicines verified by qualified medical professionals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secure document verification and storage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>24/7 monitoring and quality assurance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Compliance with healthcare regulations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-gradient-to-br from-accent-light/10 to-accent-light/5">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">Community Trust</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Verified donor and recipient profiles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Community feedback and rating system</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Transparent communication throughout process</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Support team available for any concerns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Timeline Information */}
          <Card className="mt-8 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">Verification Timeline</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">24 hours</div>
                  <div className="text-sm text-muted-foreground">Average verification time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Approval rate for valid submissions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support availability</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Verification;