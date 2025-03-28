
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Trees, MapPin, Info, BarChart, Copy, ExternalLink, Mail } from "lucide-react";
import MapBox from "@/components/MapBox";
import StatsPanel from "@/components/StatsPanel";
import CitySelector from "@/components/CitySelector";
import EmbeddableWidget from "@/components/EmbeddableWidget";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-soil to-white">
      <header className="bg-forest text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-3 md:mb-0">
            <Trees className="h-7 w-7 mr-2 animate-leaf-sway" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold font-heading">TreeCity Explorer</h1>
              <p className="text-xs md:text-sm text-forest-light">Explore Urban Forests Across India</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto">
            <div className="flex-grow md:flex-grow-0">
              <CitySelector selectedCity={selectedCity} onChange={setSelectedCity} />
            </div>
            
            <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" size="sm" asChild>
              <Link to="/about">
                <Info className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">About</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-3 md:px-4 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="lg:w-2/3 w-full">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-800">{selectedCity}'s Trees</h2>
                  <p className="text-sm text-gray-600">
                    This interactive map brings {selectedCity}'s urban forest to your fingertips.
                  </p>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <MapPin className="h-5 w-5 text-earth" />
                  <span className="text-sm font-medium text-earth">{selectedCity}</span>
                </div>
              </div>
              
              <MapBox />
              
              <div className="mt-4 text-sm text-gray-500">
                <p>
                  Explore tree locations across {selectedCity}. Click on individual trees to learn more about their species, age, and health.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3 w-full">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
              <h2 className="text-lg md:text-xl font-bold font-heading text-gray-800 mb-4 flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-forest" />
                {selectedCity} Tree Statistics
              </h2>
              
              <StatsPanel city={selectedCity} />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div>
            <EmbeddableWidget city={selectedCity} />
          </div>
          
          <div>
            <AboutSection />
          </div>
        </div>
        
        <Separator className="my-6 md:my-8" />
        
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold font-heading mb-4">Help Grow {selectedCity}'s Urban Forest</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Trees className="h-8 w-8 md:h-10 md:w-10 text-forest mx-auto mb-3 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Plant a Tree</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                Join community planting initiatives or organize your own tree planting event.
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <ExternalLink className="h-8 w-8 md:h-10 md:w-10 text-forest mx-auto mb-3 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Spread Awareness</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                Share our widgets on your website and social media to raise awareness.
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/widgets">Get Widgets</Link>
              </Button>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
              <Copy className="h-8 w-8 md:h-10 md:w-10 text-forest mx-auto mb-3 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Report Tree Data</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                Help us improve our database by reporting new trees or updates to existing ones.
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/contact">Submit Data</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Trees className="h-5 w-5 md:h-6 md:w-6 mr-2 text-forest-light" />
                <h3 className="text-lg md:text-xl font-bold">TreeCity Explorer</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-400">
                Mapping and monitoring urban forests across Indian cities to create healthier, greener urban environments.
              </p>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/cities" className="hover:text-white transition-colors">Cities</Link>
                </li>
                <li>
                  <Link to="/widgets" className="hover:text-white transition-colors">Widgets</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Data & Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link to="/methodology" className="hover:text-white transition-colors">Methodology</Link>
                </li>
                <li>
                  <Link to="/api-documentation" className="hover:text-white transition-colors">API Documentation</Link>
                </li>
                <li>
                  <Link to="/research-papers" className="hover:text-white transition-colors">Research Papers</Link>
                </li>
                <li>
                  <Link to="/partners" className="hover:text-white transition-colors">Partner Organizations</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Connect With Us</h4>
              <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                Have questions or suggestions? Reach out to us via email or social media.
              </p>
              <Button variant="outline" size="sm" className="bg-transparent" asChild>
                <a href="mailto:ceo@liveupx.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
          
          <Separator className="my-6 md:my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs md:text-sm text-gray-400">
              © 2024 TreeCity Explorer by Mohit Chaprana, Founder of Liveupx.com. All rights reserved.
            </p>
            <div className="mt-3 md:mt-0">
              <a href="https://liveupx.com" target="_blank" rel="noopener noreferrer" className="text-forest-light hover:text-white transition-colors inline-flex items-center text-sm">
                <span>Visit Liveupx.com</span>
                <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
