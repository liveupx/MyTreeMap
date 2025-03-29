import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trees, MapPin, Info, BarChart, Copy, ExternalLink, TreePine } from "lucide-react";
import MapBox from "@/components/MapBox";
import CitySelector from "@/components/CitySelector";
import EmbeddableWidget from "@/components/EmbeddableWidget";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import EnvironmentalImpact from "@/components/EnvironmentalImpact";
import StateInitiatives from "@/components/StateInitiatives";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-soil to-white">
      <Navigation />
      
      <main className="container mx-auto px-3 md:px-4 py-6 md:py-8">
        {/* Interactive Tree Map - Full width as requested */}
        <div className="w-full mb-6 md:mb-8">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-800">Interactive Tree Map</h2>
                <p className="text-sm text-gray-600">
                  Explore urban forests across Indian cities.
                </p>
              </div>
              <div className="flex items-center space-x-2 shrink-0">
                <CitySelector selectedCity={selectedCity} onChange={setSelectedCity} />
              </div>
            </div>
            
            <MapBox />
            
            <div className="mt-4 text-sm text-gray-500">
              <p>
                Data source: <Link to="/methodology" className="text-forest hover:underline">Municipal Tree Census & Satellite Imagery Analysis</Link>
              </p>
            </div>
          </div>
        </div>
        
        {/* Environmental Impact - Full width as requested */}
        <div className="w-full mb-8">
          <EnvironmentalImpact city={selectedCity} />
        </div>
        
        {/* State-wise Government Initiatives - New section */}
        <div className="w-full mb-8">
          <StateInitiatives />
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
                <Link to="/methodology">Submit Data</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
