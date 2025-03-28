
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trees, ExternalLink, BarChart, Leaf, Copy, Code, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const WidgetPreview = ({ type, city, theme }: { type: string; city: string; theme: string }) => {
  // Different widget types
  const widgets = {
    treeCount: (
      <div 
        className={`border rounded-lg p-4 ${theme === "light" ? "bg-white" : "bg-gray-800"}`} 
        style={{ maxWidth: "100%" }}
      >
        <div className="flex items-center justify-between">
          <div className={`text-sm font-medium ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}>
            TreeCity Explorer
          </div>
          <Trees size={18} className="text-forest" />
        </div>
        <div className={`text-2xl font-bold mt-2 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
          2,376,492
        </div>
        <div className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
          Total trees in {city}
        </div>
        <div className="mt-3 flex items-center text-xs">
          <div className={`px-2 py-1 rounded-full bg-forest/10 text-forest mr-2`}>
            +24,532 new trees
          </div>
          <div className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
            Updated daily
          </div>
        </div>
      </div>
    ),
    aqi: (
      <div 
        className={`border rounded-lg p-4 ${theme === "light" ? "bg-white" : "bg-gray-800"}`} 
        style={{ maxWidth: "100%" }}
      >
        <div className="flex items-center justify-between">
          <div className={`text-sm font-medium ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}>
            Air Quality Index
          </div>
          <Leaf size={18} className="text-forest" />
        </div>
        <div className="flex items-center mt-2">
          <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
            285
          </div>
          <div className="ml-3">
            <div className={`text-sm font-semibold ${theme === "light" ? "text-gray-800" : "text-white"}`}>
              Unhealthy
            </div>
            <div className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
              {city}'s current AQI
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
        className={`border rounded-lg p-4 ${theme === "light" ? "bg-white" : "bg-gray-800"}`} 
        style={{ maxWidth: "100%" }}
      >
        <div className="flex items-center justify-between">
          <div className={`text-sm font-medium ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}>
            {city} Tree Stats
          </div>
          <BarChart size={18} className="text-forest" />
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex justify-between items-center">
            <div className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Trees per person:</div>
            <div className={`text-sm font-medium ${theme === "light" ? "text-gray-800" : "text-white"}`}>0.12</div>
          </div>
          <div className="flex justify-between items-center">
            <div className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Tree cover:</div>
            <div className={`text-sm font-medium ${theme === "light" ? "text-gray-800" : "text-white"}`}>19.8%</div>
          </div>
          <div className="flex justify-between items-center">
            <div className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>CO₂ absorbed yearly:</div>
            <div className={`text-sm font-medium ${theme === "light" ? "text-gray-800" : "text-white"}`}>47.5K tons</div>
          </div>
          <div className="flex justify-between items-center">
            <div className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Goal progress:</div>
            <div className={`text-sm font-medium ${theme === "light" ? "text-gray-800" : "text-white"}`}>57.7%</div>
          </div>
        </div>
      </div>
    ),
  };

  const currentWidget = widgets[type as keyof typeof widgets] || widgets.treeCount;

  return <div className="widget-preview mt-2">{currentWidget}</div>;
};

const Widgets = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [widgetTheme, setWidgetTheme] = useState("light");
  const { toast } = useToast();

  const copyEmbedCode = (type: string) => {
    const embedCode = `<iframe 
  src="https://mytreemap.pages.dev/embed?city=${selectedCity}&type=${type}&theme=${widgetTheme}" 
  width="300" 
  height="200" 
  frameborder="0"
  title="TreeCity Explorer - ${selectedCity} ${type} widget"
></iframe>`;

    navigator.clipboard.writeText(embedCode);
    toast({
      description: "Embed code copied to clipboard!",
    });
  };

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
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Widgets Gallery</h1>
              <p className="text-gray-600">
                Embed TreeCity Explorer widgets on your website for free
              </p>
            </div>
            
            <div className="flex items-center">
              <a href="https://widgetx.site" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-forest hover:text-forest/80">
                <ExternalLink className="h-4 w-4" />
                <span>More widgets at WidgetX.site</span>
              </a>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-amber-800 font-medium">Free for Non-Commercial Use</h3>
                <p className="text-amber-700 text-sm mt-1">
                  All TreeCity Explorer widgets are free to embed on your website for non-commercial purposes. 
                  For commercial use or customized widgets, please contact us at{" "}
                  <a href="mailto:mohit@liveupx.com" className="underline hover:text-amber-900">mohit@liveupx.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trees className="h-5 w-5 text-forest" />
                  <span>Tree Count Widget</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center p-4 border rounded-lg bg-gray-50">
                  <WidgetPreview type="treeCount" city={selectedCity} theme={widgetTheme} />
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Display the current tree count for a city with information about new plantings.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => copyEmbedCode("treeCount")} className="flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  <span>Copy Code</span>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`https://mytreemap.pages.dev/embed?city=${selectedCity}&type=treeCount&theme=${widgetTheme}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>Preview</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-forest" />
                  <span>AQI Status Widget</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center p-4 border rounded-lg bg-gray-50">
                  <WidgetPreview type="aqi" city={selectedCity} theme={widgetTheme} />
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Show real-time Air Quality Index data for your selected city.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => copyEmbedCode("aqi")} className="flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  <span>Copy Code</span>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`https://mytreemap.pages.dev/embed?city=${selectedCity}&type=aqi&theme=${widgetTheme}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>Preview</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-forest" />
                  <span>Tree Stats Widget</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center p-4 border rounded-lg bg-gray-50">
                  <WidgetPreview type="stats" city={selectedCity} theme={widgetTheme} />
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Showcase detailed statistics about trees and their impact on the urban environment.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => copyEmbedCode("stats")} className="flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  <span>Copy Code</span>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`https://mytreemap.pages.dev/embed?city=${selectedCity}&type=stats&theme=${widgetTheme}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>Preview</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Widget Customization</h2>
            
            <Tabs defaultValue="theme" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="theme">Theme Options</TabsTrigger>
                <TabsTrigger value="code">Implementation</TabsTrigger>
              </TabsList>
              <TabsContent value="theme" className="space-y-4 p-4 border rounded-lg">
                <div>
                  <h3 className="text-lg font-medium mb-3">Choose Theme</h3>
                  <div className="flex space-x-3">
                    <Button
                      variant={widgetTheme === "light" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setWidgetTheme("light")}
                      className="flex-1"
                    >
                      Light Theme
                    </Button>
                    <Button
                      variant={widgetTheme === "dark" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setWidgetTheme("dark")}
                      className="flex-1"
                    >
                      Dark Theme
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Select City</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Delhi", "Mumbai", "Bangalore", "Chennai"].map((city) => (
                      <Button
                        key={city}
                        variant={selectedCity === city ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCity(city)}
                        className="w-full"
                      >
                        {city}
                      </Button>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="code" className="space-y-4 p-4 border rounded-lg">
                <div>
                  <h3 className="text-lg font-medium mb-3">Implementation Guide</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    To embed a TreeCity Explorer widget on your website, copy the iframe code below and paste it into your HTML:
                  </p>
                  
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
                    <pre>{`<iframe 
  src="https://mytreemap.pages.dev/embed?city=${selectedCity}&type=treeCount&theme=${widgetTheme}" 
  width="300" 
  height="200" 
  frameborder="0"
  title="TreeCity Explorer - ${selectedCity} tree count widget"
></iframe>`}</pre>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Available Parameters:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li><code className="bg-gray-100 px-1 rounded">city</code>: Delhi, Mumbai, Bangalore, Chennai, etc.</li>
                      <li><code className="bg-gray-100 px-1 rounded">type</code>: treeCount, aqi, stats</li>
                      <li><code className="bg-gray-100 px-1 rounded">theme</code>: light, dark</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-4">
                  <Button variant="outline" onClick={() => copyEmbedCode("treeCount")} className="flex items-center gap-2">
                    <Copy className="h-4 w-4" />
                    <span>Copy Embed Code</span>
                  </Button>
                  <Button asChild>
                    <a href="https://widgetx.site" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      <span>Advanced Options</span>
                    </a>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="bg-forest/5 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Need Custom Widgets?</h2>
            <p className="text-gray-700 mb-4">
              We can create custom widgets tailored to your specific needs. Contact us for more information.
            </p>
            <Button asChild>
              <a href="mailto:mohit@liveupx.com" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <span>Contact for Custom Solutions</span>
              </a>
            </Button>
          </div>
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

export default Widgets;
