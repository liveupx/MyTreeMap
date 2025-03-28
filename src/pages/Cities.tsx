
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trees, ExternalLink, Info, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cityData = [
  {
    name: "Delhi",
    population: "19.8 million",
    treeCount: "2,376,492",
    treeCover: "19.8%",
    aqiCurrent: 285,
    aqiStatus: "Unhealthy",
    image: "delhi.jpg"
  },
  {
    name: "Mumbai",
    population: "20.4 million",
    treeCount: "2,987,105",
    treeCover: "12.7%",
    aqiCurrent: 165,
    aqiStatus: "Unhealthy for Sensitive Groups",
    image: "mumbai.jpg"
  },
  {
    name: "Bangalore",
    population: "12.3 million",
    treeCount: "1,845,276",
    treeCover: "24.6%",
    aqiCurrent: 110,
    aqiStatus: "Moderate",
    image: "bangalore.jpg"
  },
  {
    name: "Kolkata",
    population: "14.9 million",
    treeCount: "1,572,830",
    treeCover: "16.4%",
    aqiCurrent: 190,
    aqiStatus: "Unhealthy",
    image: "kolkata.jpg"
  },
  {
    name: "Chennai",
    population: "10.9 million",
    treeCount: "1,326,742",
    treeCover: "15.9%",
    aqiCurrent: 125,
    aqiStatus: "Unhealthy for Sensitive Groups",
    image: "chennai.jpg"
  },
  {
    name: "Hyderabad",
    population: "9.7 million",
    treeCount: "1,487,921",
    treeCover: "22.3%",
    aqiCurrent: 118,
    aqiStatus: "Unhealthy for Sensitive Groups",
    image: "hyderabad.jpg"
  },
  {
    name: "Ahmedabad",
    population: "8.1 million",
    treeCount: "987,654",
    treeCover: "13.8%",
    aqiCurrent: 172,
    aqiStatus: "Unhealthy",
    image: "ahmedabad.jpg"
  },
  {
    name: "Pune",
    population: "6.6 million",
    treeCount: "1,123,456",
    treeCover: "21.6%",
    aqiCurrent: 138,
    aqiStatus: "Unhealthy for Sensitive Groups",
    image: "pune.jpg"
  }
];

const Cities = () => {
  const [viewType, setViewType] = useState("grid");
  
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
          
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" size="sm" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Explore Cities</h1>
              <p className="text-gray-600">
                Discover urban forests across major Indian cities
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant={viewType === "grid" ? "default" : "outline"} 
                size="sm"
                onClick={() => setViewType("grid")}
              >
                Grid View
              </Button>
              <Button 
                variant={viewType === "list" ? "default" : "outline"} 
                size="sm"
                onClick={() => setViewType("list")}
              >
                List View
              </Button>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          {viewType === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cityData.map((city) => (
                <Card key={city.name} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 bg-forest/20 flex items-center justify-center">
                      <Trees className="h-16 w-16 text-white/80" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <h3 className="text-xl font-bold text-white">{city.name}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Population:</span>
                        <span className="text-sm font-medium">{city.population}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Trees:</span>
                        <span className="text-sm font-medium">{city.treeCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Tree Cover:</span>
                        <span className="text-sm font-medium">{city.treeCover}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-600">AQI:</span>
                        <div className="flex items-center gap-1">
                          <div className={`w-3 h-3 rounded-full ${
                            city.aqiCurrent > 200 ? "bg-red-500" : 
                            city.aqiCurrent > 150 ? "bg-orange-500" : 
                            city.aqiCurrent > 100 ? "bg-amber-500" : 
                            city.aqiCurrent > 50 ? "bg-yellow-500" : 
                            "bg-green-500"
                          }`}></div>
                          <span className="text-sm font-medium">{city.aqiCurrent} ({city.aqiStatus})</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" asChild>
                      <Link to={`/?city=${city.name}`}>Explore {city.name}'s Trees</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {cityData.map((city) => (
                <div key={city.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/5 bg-gray-200 md:h-auto h-32 relative">
                      <div className="absolute inset-0 bg-forest/20 flex items-center justify-center">
                        <Trees className="h-12 w-12 text-white/80" />
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-6 flex-1">
                      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 flex items-center">
                            {city.name}
                            <MapPin className="h-4 w-4 ml-1 text-gray-500" />
                          </h3>
                          <p className="text-sm text-gray-600">Population: {city.population}</p>
                        </div>
                        
                        <div className="mt-2 md:mt-0 flex items-center">
                          <div className={`w-4 h-4 rounded-full ${
                            city.aqiCurrent > 200 ? "bg-red-500" : 
                            city.aqiCurrent > 150 ? "bg-orange-500" : 
                            city.aqiCurrent > 100 ? "bg-amber-500" : 
                            city.aqiCurrent > 50 ? "bg-yellow-500" : 
                            "bg-green-500"
                          } mr-2`}></div>
                          <span className="text-sm">AQI: {city.aqiCurrent} ({city.aqiStatus})</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded">
                          <span className="text-xs text-gray-500 block">Trees</span>
                          <span className="text-lg font-semibold">{city.treeCount}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded">
                          <span className="text-xs text-gray-500 block">Tree Cover</span>
                          <span className="text-lg font-semibold">{city.treeCover}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded">
                          <span className="text-xs text-gray-500 block">CO₂ Absorbed</span>
                          <span className="text-lg font-semibold">47.5K tons</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded">
                          <span className="text-xs text-gray-500 block">Trees per Person</span>
                          <span className="text-lg font-semibold">0.12</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button asChild>
                          <Link to={`/?city=${city.name}`}>Explore {city.name}'s Trees</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link to={`/?city=${city.name}&tab=stats`}>View Detailed Statistics</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
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

export default Cities;
