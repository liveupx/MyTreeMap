
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Mail, Trees, PhoneCall, MapPin, SendHorizonal, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { submitContactForm } from "@/lib/supabase-client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit form data to Supabase
      await submitContactForm(formData);
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-soil to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-forest mb-6">Get in Touch</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-forest mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">Email</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <a href="mailto:ceo@liveupx.com" className="hover:text-forest">
                          ceo@liveupx.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <a href="mailto:mohit@liveupx.com" className="hover:text-forest">
                          mohit@liveupx.com
                        </a>
                        <span className="text-xs block text-gray-500">(For support & donations)</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <PhoneCall className="h-5 w-5 text-forest mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">Phone</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        +91 90909 90909
                      </p>
                      <p className="text-xs text-gray-500">
                        Mon-Fri, 10am - 6pm IST
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-forest mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">Location</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        New Delhi, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Connect with us</h3>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://twitter.com/MohitChaprana" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-7.6 7.9-4.5 1.3 1 2.1 1.7 2.1 1.7s.8-1 1.8-1.7L22 4z"/></svg>
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://linkedin.com/in/mohitchaprana" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/mohitchaprana" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-forest/5 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Support TreeCity Explorer</h3>
                  <p className="text-xs text-gray-600 mb-3">
                    Help us expand our tree mapping project to more cities across India
                  </p>
                  <Button size="sm" asChild>
                    <a href="mailto:mohit@liveupx.com?subject=Supporting%20TreeCity%20Explorer" className="w-full justify-center">
                      Support the Project
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending message...
                      </>
                    ) : (
                      <>
                        <SendHorizonal className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">How accurate is the tree data?</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Our data comes from various sources including government databases, satellite imagery analysis, and community reporting. We strive for accuracy, but there may be some variations.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">How can I report missing or incorrect tree data?</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      You can use our contact form to report any discrepancies or missing data. We appreciate community input to improve our database.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">Are the widgets free to use?</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Yes, our widgets are free for non-commercial use. For commercial applications, please contact us for licensing information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
