import React, { useState } from "react";
import { 
  Building2, 
  LineChart, 
  TreePine, 
  Wind, 
  Landmark, 
  FileStack, 
  Users, 
  ExternalLink 
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { stateData, nationalSchemes } from "@/data/environmentalData";

const StateInitiatives = () => {
  const [expandedState, setExpandedState] = useState<string | null>(null);

  const toggleExpand = (state: string) => {
    if (expandedState === state) {
      setExpandedState(null);
    } else {
      setExpandedState(state);
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-lg md:text-xl font-bold font-heading text-gray-800 mb-4 flex items-center">
        <Landmark className="h-5 w-5 mr-2 text-forest" />
        State-Wise Government Initiatives
      </h2>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 mb-4">
          <TabsTrigger value="overview">National Overview</TabsTrigger>
          <TabsTrigger value="states">States & Initiatives</TabsTrigger>
          <TabsTrigger value="schemes">Key Schemes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">National Tree Planting Initiatives</CardTitle>
              <CardDescription>Overview of India's major forest and urban greening programs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  India has implemented several nationwide initiatives to increase forest cover and
                  improve urban green spaces. These programs aim to combat air pollution, enhance
                  biodiversity, and contribute to climate change mitigation.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TreePine className="h-4 w-4 text-forest" />
                      <h3 className="font-medium text-sm">Green India Mission</h3>
                    </div>
                    <p className="text-xs text-gray-600">
                      Aims to increase forest cover on 5 million hectares and improve quality of forest
                      on another 5 million hectares.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Wind className="h-4 w-4 text-blue-600" />
                      <h3 className="font-medium text-sm">National Clean Air Programme</h3>
                    </div>
                    <p className="text-xs text-gray-600">
                      Targets 20-30% reduction of air pollution by 2024 in 102 cities, with urban forestry
                      as a key strategy.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-4 w-4 text-amber-600" />
                      <h3 className="font-medium text-sm">Nagar Van Yojana</h3>
                    </div>
                    <p className="text-xs text-gray-600">
                      Development of 546 urban forests across India to create lung spaces in cities.
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-3">Progress & Challenges</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-500 mt-2"></div>
                      <p className="text-gray-700">2.29 billion tonnes CO₂ sink created since 2005</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-500 mt-2"></div>
                      <p className="text-gray-700">₹55,000 Cr CAMPA funds disbursed</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-red-500 mt-2"></div>
                      <p className="text-gray-700">Only 25 states have digitized forest boundaries</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-red-500 mt-2"></div>
                      <p className="text-gray-700">60% of NCAP funds remain unutilized in some states</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mt-2">
                  <p>Sources: <a href="https://moef.gov.in" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">Ministry of Environment, Forest and Climate Change</a>, <a href="https://pib.gov.in" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">Press Information Bureau</a></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="states">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">State-Wise Initiatives</CardTitle>
              <CardDescription>Tree planting and urban forestry programs across Indian states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">State</TableHead>
                      <TableHead>Key Initiatives</TableHead>
                      <TableHead className="text-center">AQI</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead className="hidden md:table-cell">Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stateData.map((state) => (
                      <React.Fragment key={state.state}>
                        <TableRow 
                          className="cursor-pointer hover:bg-gray-50" 
                          onClick={() => toggleExpand(state.state)}
                        >
                          <TableCell className="font-medium">{state.state}</TableCell>
                          <TableCell>{state.keyInitiatives}</TableCell>
                          <TableCell className="text-center">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              state.aqi < 100 ? 'bg-green-100 text-green-800' : 
                              state.aqi < 150 ? 'bg-yellow-100 text-yellow-800' : 
                              state.aqi < 200 ? 'bg-orange-100 text-orange-800' : 
                              'bg-red-100 text-red-800'
                            }`}>
                              {state.aqi}
                            </span>
                          </TableCell>
                          <TableCell>{state.progress}</TableCell>
                          <TableCell className="hidden md:table-cell">
                            <button 
                              className="text-forest hover:underline text-sm"
                              onClick={() => toggleExpand(state.state)}
                            >
                              {expandedState === state.state ? 'Hide' : 'View'} details
                            </button>
                          </TableCell>
                        </TableRow>
                        
                        {expandedState === state.state && (
                          <TableRow className="bg-gray-50">
                            <TableCell colSpan={5} className="p-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                                    <FileStack className="h-4 w-4 text-forest" />
                                    Budget & Resources
                                  </h4>
                                  <p className="text-sm text-gray-700 mb-1">{state.budget}</p>
                                  <a 
                                    href={state.govWebsite} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xs flex items-center text-blue-600 hover:underline"
                                  >
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    Official Forest Department Website
                                  </a>
                                </div>
                                
                                <div>
                                  <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                                    <Users className="h-4 w-4 text-forest" />
                                    Active Environmental NGOs
                                  </h4>
                                  <p className="text-sm text-gray-700">{state.activeNGOs}</p>
                                </div>
                                
                                <div className="md:col-span-2 mt-2">
                                  <h4 className="font-medium text-sm mb-1">Key Highlight</h4>
                                  <p className="text-sm text-gray-700">{state.highlights}</p>
                                </div>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="text-xs text-gray-500 mt-3">
                <p>Sources: Data compiled from State Forest Department reports, Central Pollution Control Board, and India State of Forest Report 2023.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="schemes">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">National Schemes & Budgets</CardTitle>
              <CardDescription>Major government programs for increasing forest cover</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {nationalSchemes.map((scheme, index) => (
                  <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <LineChart className="h-4 w-4 text-forest" />
                      {scheme.name}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Budget: </span>
                        <span className="text-gray-800">{scheme.budget}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Target: </span>
                        <span className="text-gray-800">{scheme.target}</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <a 
                        href={scheme.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs flex items-center text-blue-600 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Official Website
                      </a>
                    </div>
                  </div>
                ))}
                
                <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-md">
                  <p className="font-medium mb-1">Challenges & Recommendations</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Improved monitoring systems needed to track plantation survival rates</li>
                    <li>Better integration of state and central government initiatives</li>
                    <li>Enhanced participation of local communities in forest management</li>
                    <li>Data-driven approach to species selection based on local ecology</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StateInitiatives;
