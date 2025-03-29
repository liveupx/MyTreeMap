
import React from 'react';
import { BarChart, TreePine, Wind, Thermometer, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cityEnvironmentalData } from "@/data/environmentalData";

interface EnvironmentalImpactProps {
  city: string;
}

const EnvironmentalImpact = ({ city }: EnvironmentalImpactProps) => {
  // Get city-specific data from our data file
  const cityData = cityEnvironmentalData[city as keyof typeof cityEnvironmentalData] || cityEnvironmentalData.Delhi;

  // Helper function to determine AQI color
  const getAQIColor = (aqi: number): string => {
    if (aqi <= 50) return "bg-green-500 text-white";
    if (aqi <= 100) return "bg-yellow-500 text-white";
    if (aqi <= 150) return "bg-orange-500 text-white";
    if (aqi <= 200) return "bg-red-500 text-white";
    if (aqi <= 300) return "bg-purple-600 text-white";
    return "bg-rose-800 text-white";
  };

  // Helper function to determine AQI text
  const getAQIText = (aqi: number): string => {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Very Unhealthy";
    return "Hazardous";
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
      <h2 className="text-lg md:text-xl font-bold font-heading text-gray-800 mb-4 flex items-center">
        <BarChart className="h-5 w-5 mr-2 text-forest" />
        Environmental Impact & Tree Statistics
      </h2>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="aqi">AQI Impact</TabsTrigger>
          <TabsTrigger value="stats">Tree Species</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="overflow-hidden border-0 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-sky-100 to-blue-100 pb-2">
                <CardTitle className="flex items-center text-base gap-2">
                  <Wind className="h-4 w-4 text-blue-600" />
                  Air Quality
                </CardTitle>
                <CardDescription className="text-sm">Pollutant Removal</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">{cityData.pollutantsRemoved.toLocaleString()} tons</div>
                <p className="text-xs text-gray-500 mb-3">of pollutants removed annually</p>
                <Progress value={cityData.pollutantPercentage} className="h-2 bg-blue-100" />
                <p className="mt-3 text-xs text-gray-600">{cityData.pollutantDescription}</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-0 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100 pb-2">
                <CardTitle className="flex items-center text-base gap-2">
                  <TreePine className="h-4 w-4 text-emerald-600" />
                  Carbon Impact
                </CardTitle>
                <CardDescription className="text-sm">CO₂ Sequestration</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold text-emerald-600 mb-1">{cityData.carbonSequestration.toLocaleString()} tons</div>
                <p className="text-xs text-gray-500 mb-3">of CO₂ sequestered annually</p>
                <Progress value={cityData.carbonPercentage} className="h-2 bg-emerald-100" />
                <p className="mt-3 text-xs text-gray-600">{cityData.carbonDescription}</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-0 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100 pb-2">
                <CardTitle className="flex items-center text-base gap-2">
                  <Thermometer className="h-4 w-4 text-orange-600" />
                  Temperature
                </CardTitle>
                <CardDescription className="text-sm">Heat Reduction</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold text-orange-600 mb-1">{cityData.temperatureReduction}°C</div>
                <p className="text-xs text-gray-500 mb-3">average temperature reduction</p>
                <Progress value={cityData.temperaturePercentage} className="h-2 bg-orange-100" />
                <p className="mt-3 text-xs text-gray-600">{cityData.temperatureDescription}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="aqi">
          <div className="bg-white rounded-lg p-4 border">
            <h3 className="font-medium text-lg mb-4">Air Quality Impact Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Current AQI Improvement</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    The urban forest in {city} improves local air quality index by an estimated {cityData.aqi.withoutTrees - cityData.aqi.withCurrentTrees} points during peak pollution seasons.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Without trees:</span>
                    <span className={`font-medium px-2 py-0.5 rounded ${getAQIColor(cityData.aqi.withoutTrees)}`}>
                      {cityData.aqi.withoutTrees} AQI ({getAQIText(cityData.aqi.withoutTrees)})
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-600">With current trees:</span>
                    <span className={`font-medium px-2 py-0.5 rounded ${getAQIColor(cityData.aqi.withCurrentTrees)}`}>
                      {cityData.aqi.withCurrentTrees} AQI ({getAQIText(cityData.aqi.withCurrentTrees)})
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-600">With target tree coverage:</span>
                    <span className={`font-medium px-2 py-0.5 rounded ${getAQIColor(cityData.aqi.withTargetCoverage)}`}>
                      {cityData.aqi.withTargetCoverage} AQI ({getAQIText(cityData.aqi.withTargetCoverage)})
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="rounded-lg p-4 border">
                  <h4 className="font-medium mb-3">Pollutant Removal by Type</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Particulate Matter (PM2.5)</span>
                        <span className="font-medium">{cityData.pollutantBreakdown.pm25} tons/year</span>
                      </div>
                      <Progress value={(cityData.pollutantBreakdown.pm25 / cityData.pollutantsRemoved) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Nitrogen Dioxide (NO₂)</span>
                        <span className="font-medium">{cityData.pollutantBreakdown.no2} tons/year</span>
                      </div>
                      <Progress value={(cityData.pollutantBreakdown.no2 / cityData.pollutantsRemoved) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Ozone (O₃)</span>
                        <span className="font-medium">{cityData.pollutantBreakdown.o3} tons/year</span>
                      </div>
                      <Progress value={(cityData.pollutantBreakdown.o3 / cityData.pollutantsRemoved) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Sulfur Dioxide (SO₂)</span>
                        <span className="font-medium">{cityData.pollutantBreakdown.so2} tons/year</span>
                      </div>
                      <Progress value={(cityData.pollutantBreakdown.so2 / cityData.pollutantsRemoved) * 100} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="stats">
          <div className="bg-white rounded-lg p-4 border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 border rounded-lg bg-gray-50">
                <h3 className="text-sm font-medium text-gray-500">Total Trees</h3>
                <p className="text-2xl font-bold text-forest">{cityData.trees.totalTrees}</p>
                <p className="text-xs text-gray-500 mt-1">{cityData.trees.currentCoverage}</p>
              </div>
              
              <div className="p-3 border rounded-lg bg-gray-50">
                <h3 className="text-sm font-medium text-gray-500">Newly Planted</h3>
                <p className="text-2xl font-bold text-green-600">{cityData.trees.newlyPlanted}</p>
                <p className="text-xs text-gray-500 mt-1">{cityData.trees.growth}</p>
              </div>
              
              <div className="p-3 border rounded-lg bg-gray-50">
                <h3 className="text-sm font-medium text-gray-500">Trees Cut Down</h3>
                <p className="text-2xl font-bold text-red-600">{cityData.trees.treesCutDown}</p>
                <p className="text-xs text-gray-500 mt-1">{cityData.trees.netChange}</p>
              </div>
              
              <div className="p-3 border rounded-lg bg-gray-50">
                <h3 className="text-sm font-medium text-gray-500">Population</h3>
                <p className="text-2xl font-bold text-blue-600">{cityData.trees.population}</p>
                <p className="text-xs text-gray-500 mt-1">{cityData.trees.recommended}</p>
              </div>
            </div>
            
            <div className="mt-4 p-4 border rounded-lg">
              <h3 className="text-lg font-medium mb-3">Species Distribution</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {cityData.speciesDistribution.map((species, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ 
                        backgroundColor: [
                          "#2E7D32", // forest
                          "#81C784", // forest-light
                          "#71A95A", // leaf
                          "#8B5A2B", // bark
                          "#D2691E", // earth
                          "#5D4037", // brown
                          "#7CB342", // light-green
                          "#558B2F", // dark-green
                          "#33691E", // olive
                          "#827717", // mustard
                        ][index % 10]
                      }}
                    ></div>
                    <span>{species.name} ({species.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="progress">
          <div className="bg-white rounded-lg p-4 border">
            <h3 className="font-medium text-lg mb-4">Tree Planting Progress</h3>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Current Trees: {cityData.trees.totalTrees}</span>
                <span className="text-sm text-gray-600">Required: {cityData.trees.requiredTrees}</span>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-4 mb-1 text-xs flex rounded-full bg-gray-200">
                  <div
                    style={{ width: `${cityData.trees.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-forest transition-all"
                  >
                    <span className="px-2">{cityData.trees.progress}%</span>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500">
                <span className="font-medium">{cityData.trees.progress}% of needed trees planted</span>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Gap: {cityData.trees.gap}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-forest/5 rounded-lg border">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-forest" />
                  <span>Community Impact</span>
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  To reach the recommended 2 trees per person ratio, {city} needs {cityData.trees.gap} more trees.
                </p>
                <div className="text-sm text-gray-600">
                  At the current planting rate of ~{cityData.trees.newlyPlanted} trees per year, it would take approximately 1,600 years to reach the goal. Community and government initiatives are needed to accelerate tree planting efforts.
                </div>
              </div>
              
              <div className="p-4 bg-forest/5 rounded-lg border">
                <h4 className="font-medium mb-2">Annual Planting Targets</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>10-year goal (3.85M/year)</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>25-year goal (1.55M/year)</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>50-year goal (775K/year)</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="text-xs text-gray-500 mt-4">
        <p>
          Sources: <a href="/research-papers" className="text-forest hover:underline">Indian Institute of Forest Management Research Papers, 2023</a>, 
          <a href="https://fsi.nic.in/forest-report-2023" className="text-forest hover:underline ml-1" target="_blank" rel="noopener noreferrer">Forest Survey of India, 2023</a>
        </p>
      </div>
    </div>
  );
};

export default EnvironmentalImpact;
