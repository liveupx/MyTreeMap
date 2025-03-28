
import React, { useEffect, useState } from "react";
import { Trees, BarChart, Leaf } from "lucide-react";

const EmbedWidget = () => {
  const [params, setParams] = useState({
    city: "Delhi",
    type: "treeCount",
    theme: "light",
    title: "",
    description: ""
  });

  useEffect(() => {
    // Parse URL parameters
    const searchParams = new URLSearchParams(window.location.search);
    
    setParams({
      city: searchParams.get("city") || "Delhi",
      type: searchParams.get("type") || "treeCount",
      theme: searchParams.get("theme") || "light",
      title: searchParams.get("title") || "",
      description: searchParams.get("description") || ""
    });
  }, []);

  // Different widget types
  const widgets = {
    treeCount: (
      <div 
        className={`w-full h-full border rounded-lg p-4 ${params.theme === "light" ? "bg-white" : "bg-gray-800"}`}
      >
        <div className="flex items-center justify-between">
          <div className={`text-sm font-medium ${params.theme === "light" ? "text-gray-500" : "text-gray-300"}`}>
            {params.title || "TreeCity Explorer"}
          </div>
          <Trees size={18} className="text-forest" />
        </div>
        <div className={`text-2xl font-bold mt-2 ${params.theme === "light" ? "text-gray-800" : "text-white"}`}>
          2,376,492
        </div>
        <div className={`text-xs ${params.theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
          {params.description || `Total trees in ${params.city}`}
        </div>
        <div className="mt-3 flex items-center text-xs">
          <div className={`px-2 py-1 rounded-full bg-forest/10 text-forest mr-2`}>
            +24,532 new trees
          </div>
          <div className={`text-xs ${params.theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
            Updated daily
          </div>
        </div>
      </div>
    ),
    aqi: (
      <div 
        className={`w-full h-full border rounded-lg p-4 ${params.theme === "light" ? "bg-white" : "bg-gray-800"}`}
      >
        <div className="flex items-center justify-between">
          <div className={`text-sm font-medium ${params.theme === "light" ? "text-gray-500" : "text-gray-300"}`}>
            {params.title || "Air Quality Index"}
          </div>
          <Leaf size={18} className="text-forest" />
        </div>
        <div className="flex items-center mt-2">
          <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
            285
          </div>
          <div className="ml-3">
            <div className={`text-sm font-semibold ${params.theme === "light" ? "text-gray-800" : "text-white"}`}>
              Unhealthy
            </div>
            <div className={`text-xs ${params.theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
              {params.description || `${params.city}'s current AQI`}
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" 
              style={{ width: "95%" }}
            />
          </div>
          <div className="flex justify-between text-xs mt-1 text-gray-500">
            <span>Good</span>
            <span>Moderate</span>
            <span>Unhealthy</span>
          </div>
        </div>
      </div>
    ),
    stats: (
      <div 
        className={`w-full h-full border rounded-lg p-4 ${params.theme === "light" ? "bg-white" : "bg-gray-800"}`}
      >
        <div className="flex items-center justify-between">
          <div className={`text-sm font-medium ${params.theme === "light" ? "text-gray-500" : "text-gray-300"}`}>
            {params.title || `${params.city} Tree Stats`}
          </div>
          <BarChart size={18} className="text-forest" />
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex justify-between items-center">
            <div className={`text-xs ${params.theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Trees per person:</div>
            <div className={`text-sm font-medium ${params.theme === "light" ? "text-gray-800" : "text-white"}`}>0.12</div>
          </div>
          <div className="flex justify-between items-center">
            <div className={`text-xs ${params.theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Tree cover:</div>
            <div className={`text-sm font-medium ${params.theme === "light" ? "text-gray-800" : "text-white"}`}>19.8%</div>
          </div>
          <div className="flex justify-between items-center">
            <div className={`text-xs ${params.theme === "light" ? "text-gray-600" : "text-gray-300"}`}>CO₂ absorbed yearly:</div>
            <div className={`text-sm font-medium ${params.theme === "light" ? "text-gray-800" : "text-white"}`}>47.5K tons</div>
          </div>
          <div className="flex justify-between items-center">
            <div className={`text-xs ${params.theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
              {params.description || "Goal progress:"}
            </div>
            <div className={`text-sm font-medium ${params.theme === "light" ? "text-gray-800" : "text-white"}`}>57.7%</div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div 
      className={`w-full h-screen flex items-center justify-center ${params.theme === "light" ? "bg-transparent" : "bg-gray-900"}`}
    >
      {widgets[params.type as keyof typeof widgets] || widgets.treeCount}
    </div>
  );
};

export default EmbedWidget;
