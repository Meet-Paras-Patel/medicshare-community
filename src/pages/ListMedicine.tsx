import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon, Upload, MapPin, Camera, FileText, CheckCircle, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const formSchema = z.object({
  medicineName: z.string().min(2, "Medicine name must be at least 2 characters"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  expiryDate: z.date({
    required_error: "Expiry date is required",
  }),
  description: z.string().optional(),
  location: z.string().min(5, "Please provide a valid pickup location"),
});

type FormData = z.infer<typeof formSchema>;

const ListMedicine = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [medicinePhoto, setMedicinePhoto] = useState<File | null>(null);
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      medicineName: "",
      quantity: 1,
      description: "",
      location: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form data:", data);
    console.log("Medicine photo:", medicinePhoto);
    console.log("Prescription file:", prescriptionFile);
    
    toast({
      title: "Medicine Listed Successfully!",
      description: "Your medicine has been submitted for verification. You'll receive an update within 24 hours.",
    });
    
    setIsSubmitting(false);
    form.reset();
    setMedicinePhoto(null);
    setPrescriptionFile(null);
  };

  const handleMedicinePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedicinePhoto(file);
    }
  };

  const handlePrescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionFile(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 bg-secondary/30 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              List Your Medicine
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help someone in need by sharing your unused, sealed medicines. 
              Every contribution makes a difference.
            </p>
          </div>

          <Card className="shadow-lg border-primary/10">
            <CardHeader className="bg-gradient-to-r from-primary-light/50 to-accent-light/30 rounded-t-lg">
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Camera className="w-6 h-6 mr-2 text-primary" />
                Medicine Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="medicineName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Medicine Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g., Paracetamol, Amoxicillin..." 
                              className="h-12 border-2 focus:border-primary"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Quantity *</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min="1"
                              placeholder="Number of tablets/bottles"
                              className="h-12 border-2 focus:border-primary"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-base font-semibold">Expiry Date *</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "h-12 border-2 focus:border-primary pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick an expiry date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any additional information about the medicine..."
                            className="min-h-[100px] border-2 focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* File Upload Section */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Medicine Photo */}
                      <div className="space-y-2">
                        <Label className="text-base font-semibold flex items-center">
                          <Camera className="w-4 h-4 mr-2 text-primary" />
                          Medicine Photo *
                        </Label>
                        <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleMedicinePhotoChange}
                            className="hidden"
                            id="medicine-photo"
                          />
                          <label htmlFor="medicine-photo" className="cursor-pointer">
                            <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">
                              {medicinePhoto ? medicinePhoto.name : "Click to upload medicine photo"}
                            </p>
                          </label>
                        </div>
                      </div>

                      {/* Prescription Upload */}
                      <div className="space-y-2">
                        <Label className="text-base font-semibold flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-accent" />
                          Prescription (Optional)
                        </Label>
                        <div className="border-2 border-dashed border-accent/30 rounded-lg p-6 text-center hover:border-accent/50 transition-colors">
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handlePrescriptionChange}
                            className="hidden"
                            id="prescription-file"
                          />
                          <label htmlFor="prescription-file" className="cursor-pointer">
                            <Upload className="w-8 h-8 text-accent mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">
                              {prescriptionFile ? prescriptionFile.name : "Upload prescription (PDF/JPEG)"}
                            </p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          Pickup Location *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your address or nearby landmark"
                            className="h-12 border-2 focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-6 border-t border-border">
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-lg py-6 h-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting Medicine...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Submit Medicine for Verification
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-3">
                      Your submission will be reviewed within 24 hours
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ListMedicine;