
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MapBox from "@/components/MapBox";
import StatsPanel from "@/components/StatsPanel";
import CitySelector from "@/components/CitySelector";
import EnvironmentalImpact from "@/components/EnvironmentalImpact";
import { LeafyGreen, Trees } from "lucide-react";
import TreeIdentifier from "@/components/TreeIdentifier";
import AudioGuide from "@/components/AudioGuide";
import CommunityContributions from "@/components/CommunityContributions";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");

  return (
    <div className="min-h-screen bg-gradient-to-b from-soil to-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-forest mb-2 flex items-center justify-center">
              <LeafyGreen className="h-8 w-8 mr-2" />
              MyTreeMap - Urban Forestry Platform
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Explore India's urban forests, track environmental impact, and contribute to a greener future
            </p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <MapBox city={selectedCity} />
            </div>
            
            <div>
              <CitySelector 
                selectedCity={selectedCity}
                onChange={setSelectedCity}
              />
            </div>
          </div>
          
          <div className="mt-12">
            <AudioGuide city={selectedCity} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <TreeIdentifier />
            <CommunityContributions />
          </div>
          
          <div className="mt-12">
            <StatsPanel city={selectedCity} />
          </div>
          
          <div className="mt-12">
            <EnvironmentalImpact city={selectedCity} />
          </div>
          
          <section className="mt-12 py-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold font-heading text-forest mb-4 flex items-center">
              <Trees className="h-6 w-6 mr-2" />
              Explore More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="/about" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">About MyTreeMap</h3>
                <p className="text-gray-600 text-sm">Learn about our mission, team, and vision for a greener future.</p>
              </a>
              <a href="/cities" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Explore Cities</h3>
                <p className="text-gray-600 text-sm">Discover detailed tree statistics and environmental data for each city.</p>
              </a>
              <a href="/widgets" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Widgets</h3>
                <p className="text-gray-600 text-sm">Embed interactive tree data widgets on your website for free.</p>
              </a>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
