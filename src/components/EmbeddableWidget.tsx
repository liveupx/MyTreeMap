import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trees, BarChart, Leaf, Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Slider } from "@/components/ui/slider";

const WidgetPreview = ({ type, city, theme, customOptions }: { 
  type: string; 
  city: string; 
  theme: string;
  customOptions: {
    title: string;
    description: string;
    width: number;
    height: number;
  }
}) => {
  // Different widget types
  const widgets = {
    treeCount: (
      <div 
        className={`border rounded-lg p-4 ${theme === "light" ? "bg-white" : "bg-gray-800"}`} 
        style={{ width: `${customOptions.width}px`, maxWidth: "100%" }}
      >
        <div className="flex items-center justify-between">
          <div className={`text-sm font-medium ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}>
            {customOptions.title || "MyTreeMaps Explorer"}
          </div>
          <Trees size={18} className="text-forest" />
        </div>
        <div className={`text-2xl font-bold mt-2 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
          2,376,492
        </div>
        <div className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
          {customOptions.description || `Total trees in ${city}`}
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
        style={{ width: `${customOptions.width}px`, maxWidth: "100%" }}
      >
        <div className="flex items-center justify-between">
          <div className={`text-sm font-medium ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}>
            {customOptions.title || "Air Quality Index"}
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
              {customOptions.description || `${city}'s current AQI`}
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
        style={{ width: `${customOptions.width}px`, maxWidth: "100%" }}
      >
        <div className="flex items-center justify-between">
          <div className={`text-sm font-medium ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}>
            {customOptions.title || `${city} Tree Stats`}
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
            <div className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
              {customOptions.description || "Goal progress:"}
            </div>
            <div className={`text-sm font-medium ${theme === "light" ? "text-gray-800" : "text-white"}`}>57.7%</div>
          </div>
        </div>
      </div>
    ),
  };

  const currentWidget = widgets[type as keyof typeof widgets] || widgets.treeCount;

  return <div className="widget-preview mt-2">{currentWidget}</div>;
};

const EmbeddableWidget = ({ city }: { city: string }) => {
  const [widgetType, setWidgetType] = useState("treeCount");
  const [widgetTheme, setWidgetTheme] = useState("light");
  const [customOptions, setCustomOptions] = useState({
    title: "",
    description: "",
    width: 300,
    height: 200,
  });
  const { toast } = useToast();

  const getEmbedCode = () => {
    return `<iframe 
  src="https://mytreemap.netlify.app/embed?city=${city}&type=${widgetType}&theme=${widgetTheme}${customOptions.title ? `&title=${encodeURIComponent(customOptions.title)}` : ''}${customOptions.description ? `&description=${encodeURIComponent(customOptions.description)}` : ''}" 
  width="${customOptions.width}" 
  height="${customOptions.height}" 
  frameborder="0"
  title="MyTreeMaps - ${city} ${widgetType} widget"
></iframe>`;
  };

  const copyEmbedCode = () => {
    navigator.clipboard.writeText(getEmbedCode());
    toast({
      description: "Embed code copied to clipboard!",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Embeddable Widgets</CardTitle>
        <CardDescription>
          Add tree data from {city} to your website with these embeddable widgets.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="widget" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="widget">Choose Widget</TabsTrigger>
            <TabsTrigger value="customize">Customize</TabsTrigger>
          </TabsList>
          <TabsContent value="widget" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
              <Button
                variant={widgetType === "treeCount" ? "default" : "outline"}
                onClick={() => setWidgetType("treeCount")}
                className="w-full justify-start"
                size="sm"
              >
                <Trees className="mr-2 h-4 w-4" />
                Tree Count
              </Button>
              <Button
                variant={widgetType === "aqi" ? "default" : "outline"}
                onClick={() => setWidgetType("aqi")}
                className="w-full justify-start"
                size="sm"
              >
                <Leaf className="mr-2 h-4 w-4" />
                AQI Status
              </Button>
              <Button
                variant={widgetType === "stats" ? "default" : "outline"}
                onClick={() => setWidgetType("stats")}
                className="w-full justify-start"
                size="sm"
              >
                <BarChart className="mr-2 h-4 w-4" />
                Tree Stats
              </Button>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium">Theme</h3>
                <div className="flex space-x-2">
                  <Button
                    variant={widgetTheme === "light" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setWidgetTheme("light")}
                    className="text-xs h-8"
                  >
                    Light
                  </Button>
                  <Button
                    variant={widgetTheme === "dark" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setWidgetTheme("dark")}
                    className="text-xs h-8"
                  >
                    Dark
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto">
              <h3 className="text-sm font-medium mb-2">Preview</h3>
              <div className="flex justify-center p-4 border rounded-lg bg-gray-50">
                <WidgetPreview 
                  type={widgetType} 
                  city={city} 
                  theme={widgetTheme} 
                  customOptions={customOptions}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="customize" className="space-y-4">
            <div className="space-y-4">
              <div>
                <label htmlFor="widget-title" className="text-sm font-medium block mb-1">
                  Custom Title (optional)
                </label>
                <Input
                  id="widget-title"
                  value={customOptions.title}
                  onChange={(e) =>
                    setCustomOptions({ ...customOptions, title: e.target.value })
                  }
                  placeholder={`e.g., ${city}'s Urban Forest`}
                />
              </div>

              <div>
                <label htmlFor="widget-description" className="text-sm font-medium block mb-1">
                  Custom Description (optional)
                </label>
                <Textarea
                  id="widget-description"
                  value={customOptions.description}
                  onChange={(e) =>
                    setCustomOptions({ ...customOptions, description: e.target.value })
                  }
                  placeholder="Add a custom description for your widget"
                  rows={2}
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-3">Widget Size</label>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <label htmlFor="widget-width" className="text-xs text-gray-500">
                        Width: {customOptions.width}px
                      </label>
                      <span className="text-xs text-gray-500">
                        {customOptions.width < 250 ? "Small" : customOptions.width < 400 ? "Medium" : "Large"}
                      </span>
                    </div>
                    <Slider
                      id="widget-width"
                      min={200}
                      max={600}
                      step={10}
                      value={[customOptions.width]}
                      onValueChange={(value) => 
                        setCustomOptions({ ...customOptions, width: value[0] })
                      }
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <label htmlFor="widget-height" className="text-xs text-gray-500">
                        Height: {customOptions.height}px
                      </label>
                    </div>
                    <Slider
                      id="widget-height"
                      min={100}
                      max={400}
                      step={10}
                      value={[customOptions.height]}
                      onValueChange={(value) => 
                        setCustomOptions({ ...customOptions, height: value[0] })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="w-full">
          <label htmlFor="embed-code" className="text-sm font-medium block mb-1">
            Embed Code
          </label>
          <div className="relative">
            <Textarea id="embed-code" readOnly value={getEmbedCode()} className="pr-10 font-mono text-xs" />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 top-2"
              onClick={copyEmbedCode}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full gap-2">
          <Button variant="outline" onClick={() => window.open("https://mytreemap.netlify.app/widgets", "_blank")}>
            <ExternalLink className="mr-2 h-4 w-4" />
            More Widget Options
          </Button>
          <Button onClick={copyEmbedCode}>Copy Embed Code</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EmbeddableWidget;
