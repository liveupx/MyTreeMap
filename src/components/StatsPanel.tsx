import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Trees, Wind, Trash2, Users, Plus, AlertTriangle, Leaf } from "lucide-react";

const StatsPanel = ({ city = "Delhi" }: { city?: string }) => {
  // Mock data for statistics
  const stats = {
    Delhi: {
      totalTrees: 2376492,
      newlyPlanted: 24532,
      cutTrees: 1253,
      population: 20591874,
      treesRequired: 41183748,
      currentAQI: 285,
      projectedAQI: 142,
      treeSpecies: [
        { name: "Neem", count: 583214, percentage: 24.5 },
        { name: "Peepal", count: 425216, percentage: 17.9 },
        { name: "Banyan", count: 246352, percentage: 10.4 },
        { name: "Gulmohar", count: 210215, percentage: 8.8 },
        { name: "Ashoka", count: 186421, percentage: 7.8 },
      ],
    },
    "New Delhi": {
      totalTrees: 1257896,
      newlyPlanted: 18962,
      cutTrees: 847,
      population: 257803,
      treesRequired: 515606,
      currentAQI: 265,
      projectedAQI: 132,
      treeSpecies: [
        { name: "Neem", count: 324569, percentage: 25.8 },
        { name: "Ashoka", count: 219872, percentage: 17.5 },
        { name: "Peepal", count: 156985, percentage: 12.5 },
        { name: "Arjuna", count: 98547, percentage: 7.8 },
        { name: "Amaltas", count: 85462, percentage: 6.8 },
      ],
    },
    Mumbai: {
      totalTrees: 2984621,
      newlyPlanted: 32568,
      cutTrees: 1587,
      population: 12442373,
      treesRequired: 24884746,
      currentAQI: 175,
      projectedAQI: 87,
      treeSpecies: [
        { name: "Banyan", count: 547214, percentage: 18.3 },
        { name: "Peepal", count: 423985, percentage: 14.2 },
        { name: "Coconut", count: 385642, percentage: 12.9 },
        { name: "Mango", count: 325487, percentage: 10.9 },
        { name: "Gulmohar", count: 274563, percentage: 9.2 },
      ],
    },
    Bangalore: {
      totalTrees: 1857492,
      newlyPlanted: 28643,
      cutTrees: 968,
      population: 8443675,
      treesRequired: 16887350,
      currentAQI: 142,
      projectedAQI: 76,
      treeSpecies: [
        { name: "Rain Tree", count: 397845, percentage: 21.4 },
        { name: "Gulmohar", count: 287621, percentage: 15.5 },
        { name: "Silver Oak", count: 242865, percentage: 13.1 },
        { name: "Peepal", count: 185749, percentage: 10.0 },
        { name: "Neem", count: 157863, percentage: 8.5 },
      ],
    },
  };

  // Helper function to format large numbers
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  };

  // Get current city stats
  const cityStats = stats[city as keyof typeof stats] || stats.Delhi;
  
  // Calculate trees planted progress
  const treePlantedPercentage = (cityStats.totalTrees / cityStats.treesRequired) * 100;

  // Calculate AQI level color and text
  const getAQIColor = (aqi: number): string => {
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-yellow-400";
    if (aqi <= 150) return "bg-orange-400";
    if (aqi <= 200) return "bg-red-500";
    if (aqi <= 300) return "bg-purple-600";
    return "bg-rose-800";
  };

  const getAQIText = (aqi: number): string => {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Very Unhealthy";
    return "Hazardous";
  };

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="aqi">AQI Impact</TabsTrigger>
        <TabsTrigger value="species">Tree Species</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="stat-card animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                <Trees size={16} className="mr-1 text-forest" />
                Total Trees
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="tree-count">{formatNumber(cityStats.totalTrees)}</div>
              <p className="text-xs text-gray-500 mt-1">
                Current Coverage: {(cityStats.totalTrees / cityStats.population).toFixed(2)} trees per person
              </p>
            </CardContent>
          </Card>

          <Card className="stat-card animate-fade-in-up" style={{ animationDelay: "50ms" }}>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                <Plus size={16} className="mr-1 text-forest-light" />
                Newly Planted
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-forest-light text-3xl font-bold">
                {formatNumber(cityStats.newlyPlanted)}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {((cityStats.newlyPlanted / cityStats.totalTrees) * 100).toFixed(2)}% growth in last year
              </p>
            </CardContent>
          </Card>

          <Card className="stat-card animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                <Trash2 size={16} className="mr-1 text-earth" />
                Trees Cut Down
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-earth text-3xl font-bold">{formatNumber(cityStats.cutTrees)}</div>
              <p className="text-xs text-gray-500 mt-1">
                Net Change: +{formatNumber(cityStats.newlyPlanted - cityStats.cutTrees)} trees
              </p>
            </CardContent>
          </Card>

          <Card className="stat-card animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                <Users size={16} className="mr-1 text-sky-dark" />
                Population
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-sky-dark text-3xl font-bold">{formatNumber(cityStats.population)}</div>
              <p className="text-xs text-gray-500 mt-1">
                Recommended: 2 trees per person
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="stat-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-lg">Tree Planting Progress</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <div className="mb-1 flex justify-between text-sm">
              <span>Current Trees: {formatNumber(cityStats.totalTrees)}</span>
              <span>Required: {formatNumber(cityStats.treesRequired)}</span>
            </div>
            <Progress value={treePlantedPercentage} className="h-3" />
            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <span className="font-semibold">{treePlantedPercentage.toFixed(1)}%</span> of needed trees planted
              </div>
              <div className="flex items-center text-sm text-orange-500">
                <AlertTriangle size={14} className="mr-1" />
                Gap: {formatNumber(cityStats.treesRequired - cityStats.totalTrees)} trees
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="aqi" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="stat-card">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg">Current AQI</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <div className="flex items-center mb-3 space-x-2">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold ${getAQIColor(cityStats.currentAQI)}`}>
                  {cityStats.currentAQI}
                </div>
                <div>
                  <h4 className="font-semibold">{getAQIText(cityStats.currentAQI)}</h4>
                  <p className="text-sm text-gray-500">Based on recent measurements</p>
                </div>
              </div>
              <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                <Wind size={16} className="inline mr-1" />
                The current air quality in {city} is {getAQIText(cityStats.currentAQI).toLowerCase()}.
                {cityStats.currentAQI > 100 ? (
                  <span className="text-red-500"> Air pollution is a significant health risk.</span>
                ) : (
                  <span> Air quality is acceptable for most individuals.</span>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg">AQI Calculator</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <div className="flex items-start space-x-4 mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">Current AQI</h4>
                  <div className={`w-full py-2 rounded text-center text-white font-bold ${getAQIColor(cityStats.currentAQI)}`}>
                    {cityStats.currentAQI}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Leaf size={24} className="text-forest" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">Projected AQI</h4>
                  <div className={`w-full py-2 rounded text-center text-white font-bold ${getAQIColor(cityStats.projectedAQI)}`}>
                    {cityStats.projectedAQI}
                  </div>
                </div>
              </div>
              <Separator className="my-3" />
              <div className="text-sm">
                <p className="mb-2">
                  If {city} plants all {formatNumber(cityStats.treesRequired - cityStats.totalTrees)} additional trees needed:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>AQI would decrease by {(cityStats.currentAQI - cityStats.projectedAQI).toFixed(0)} points</li>
                  <li>Air quality would improve from "{getAQIText(cityStats.currentAQI)}" to "{getAQIText(cityStats.projectedAQI)}"</li>
                  <li>PM2.5 levels could reduce by approximately {((cityStats.currentAQI - cityStats.projectedAQI) / cityStats.currentAQI * 100).toFixed(0)}%</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="species" className="space-y-4">
        <Card className="stat-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-lg">Tree Species Distribution</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <div className="space-y-3">
              {cityStats.treeSpecies.map((species, index) => (
                <div key={species.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{species.name}</span>
                    <span className="text-gray-500">{formatNumber(species.count)} trees ({species.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${species.percentage}%`,
                        backgroundColor: [
                          "#2E7D32", // forest
                          "#81C784", // forest-light
                          "#71A95A", // leaf
                          "#8B5A2B", // bark
                          "#D2691E", // earth
                        ][index % 5],
                      }}
                    ></div>
                  </div>
                </div>
              ))}
              
              <Separator className="my-3" />
              
              <div className="text-sm text-gray-600">
                <h4 className="font-semibold">Biodiversity Score</h4>
                <div className="flex items-center mt-1">
                  <div className="w-1/3 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-l-full"></div>
                  <div className="w-2/3 h-2 bg-gray-200 rounded-r-full"></div>
                  <span className="ml-2">Fair</span>
                </div>
                <p className="mt-2">
                  {city} has {cityStats.treeSpecies.length}+ identified tree species. Improving biodiversity by planting more varied native species can enhance urban ecosystem resilience.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default StatsPanel;
