
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Calculator, Microscope, BarChart3, Database, BookText, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { methodologySources } from "@/data/environmentalData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the research methodology sources
const researchMethodologySources = [
  {
    title: "Academic Databases",
    description: "Research papers were identified from academic databases like ResearchGate, Academia.edu, and journal websites such as MDPI and SpringerLink.",
    organization: "Multiple Academic Institutions",
    url: "https://www.researchgate.net/"
  },
  {
    title: "India State of Forest Reports",
    description: "Used for supplementary data on state-wide forest and tree cover statistics where urban-specific data was limited.",
    organization: "Forest Survey of India",
    url: "https://fsi.nic.in/"
  },
  {
    title: "Peer-Reviewed Journals",
    description: "All data is sourced from peer-reviewed publications, ensuring scientific validity and accuracy of information.",
    organization: "Various Scientific Publishers",
    url: "https://www.mdpi.com/"
  }
];

const Methodology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-soil to-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-forest hover:text-forest-dark">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold mt-4 flex items-center">
            <Calculator className="h-6 w-6 mr-2 text-forest" />
            Methodology
          </h1>
          <p className="text-gray-600 mt-1">
            Our approach to data collection, analysis, and visualization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-forest" />
                  Data Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  MyTreeMaps combines multiple authoritative data sources to provide accurate and comprehensive 
                  information about urban forests across Indian cities. Our primary data sources include:
                </p>

                <div className="space-y-4">
                  {methodologySources.map((source, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <h3 className="font-medium text-forest mb-2">{source.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{source.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{source.organization}</span>
                        <Button variant="link" size="sm" className="text-xs h-auto p-0" asChild>
                          <a href={source.url} target="_blank" rel="noopener noreferrer">
                            Visit Source
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookText className="h-5 w-5 mr-2 text-forest" />
                  Research Methodology
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 mb-3">
                  Our research methodology focuses on identifying and analyzing peer-reviewed research papers that provide data on urban forestry in Indian states. The process involved:
                </p>

                <div className="space-y-4">
                  {researchMethodologySources.map((source, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <h3 className="font-medium text-forest mb-2">{source.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{source.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{source.organization}</span>
                        <Button variant="link" size="sm" className="text-xs h-auto p-0" asChild>
                          <a href={source.url} target="_blank" rel="noopener noreferrer">
                            Visit Source
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border mt-4">
                  <h3 className="font-medium text-forest mb-2">Selection Criteria</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Papers were selected based on their relevance to urban areas within states, ensuring they provided quantifiable data suitable for analysis. Keywords used in searches included:
                  </p>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li>Urban forestry</li>
                    <li>Urban tree cover</li>
                    <li>State names (e.g., Delhi, Karnataka, Tamil Nadu, Maharashtra)</li>
                    <li>Air quality and trees</li>
                    <li>Green space assessment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-forest" />
                  Calculation Methodologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-medium text-lg">Tree Requirement Calculation</h3>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-sm text-gray-700 mb-3">
                    Our tree requirement calculations are based on the standard recommendation of 
                    at least 2 trees per person to ensure adequate air filtration and environmental benefits.
                  </p>
                  <div className="text-xs text-gray-600 space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-medium text-right">Formula:</div>
                      <div className="col-span-2 bg-white px-3 py-1 rounded border">
                        Required Trees = City Population × 2
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-medium text-right">Example (Delhi):</div>
                      <div className="col-span-2 bg-white px-3 py-1 rounded border">
                        20.59M people × 2 trees/person = 41.18M trees required
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-medium text-right">Gap:</div>
                      <div className="col-span-2 bg-white px-3 py-1 rounded border">
                        Required Trees - Current Trees = 41.18M - 2.38M = 38.8M trees
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <h3 className="font-medium text-lg">Air Quality Impact Calculation</h3>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-sm text-gray-700 mb-3">
                    Air quality impacts are calculated using scientific models that estimate pollutant removal rates 
                    by urban trees based on leaf area, tree species, and local atmospheric conditions.
                  </p>
                  <div className="text-xs text-gray-600 space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-medium text-right">Methodology:</div>
                      <div className="col-span-2 bg-white px-3 py-1 rounded border">
                        USFS i-Tree model adapted for Indian urban conditions
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-medium text-right">PM2.5 Removal Rate:</div>
                      <div className="col-span-2 bg-white px-3 py-1 rounded border">
                        Average 0.262 kg per tree per year (varies by species)
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-medium text-right">AQI Improvement:</div>
                      <div className="col-span-2 bg-white px-3 py-1 rounded border">
                        Based on pollutant concentration reduction models
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <h3 className="font-medium text-lg">Carbon Sequestration Calculation</h3>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-sm text-gray-700 mb-3">
                    Carbon sequestration is calculated using species-specific allometric equations that relate 
                    tree diameter to biomass and carbon content.
                  </p>
                  <div className="text-xs text-gray-600 space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-medium text-right">Formula:</div>
                      <div className="col-span-2 bg-white px-3 py-1 rounded border">
                        Carbon (kg) = exp(a + b × ln(DBH))
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-medium text-right">Variables:</div>
                      <div className="col-span-2 bg-white px-3 py-1 rounded border">
                        DBH = Diameter at Breast Height, a & b are species-specific constants
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-medium text-right">Annual Rate:</div>
                      <div className="col-span-2 bg-white px-3 py-1 rounded border">
                        Average 7.56 kg CO₂ per tree per year in urban conditions
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-forest" />
                  Data Visualization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Our visualizations are designed to make complex environmental data accessible and actionable. 
                  We use standardized approaches to ensure data comparability across cities.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <div className="h-5 w-5 bg-forest rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">1</div>
                    <span>Maps use the same scale for tree density to enable city comparisons</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 bg-forest rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">2</div>
                    <span>Progress indicators show percentage of required trees (2 per person standard)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 bg-forest rounded-full flex items-center justify-center text-white text-xs mr-2 mt-0.5">3</div>
                    <span>AQI impacts are shown in standardized categories used by pollution control boards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Microscope className="h-5 w-5 mr-2 text-forest" />
                  Research Papers Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Our research paper collection focuses on key states with significant urban areas:
                </p>
                <Table className="text-xs">
                  <TableHeader>
                    <TableRow>
                      <TableHead>State</TableHead>
                      <TableHead>Papers</TableHead>
                      <TableHead>Topics Covered</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Delhi</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Air pollution tolerance, urban landscaping</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Karnataka</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Tree cover mapping, urban expansion</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Tamil Nadu</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Species diversity, biodiversity</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Maharashtra</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Green space assessment, accessibility</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Button className="w-full mt-4 bg-forest hover:bg-forest-dark" asChild>
                  <Link to="/research-papers">
                    <FileText className="h-4 w-4 mr-2" />
                    View Research Papers
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-forest" />
                  Current Research Gaps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Our analysis identified several gaps in the current research landscape:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest mr-2 mt-1.5"></div>
                    <span>Uneven coverage across states, with many lacking urban forestry studies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest mr-2 mt-1.5"></div>
                    <span>Limited data on smaller urban centers compared to major metros</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest mr-2 mt-1.5"></div>
                    <span>Need for more studies on urban tree health and mortality rates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest mr-2 mt-1.5"></div>
                    <span>Lack of standardized methodology across research papers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Methodology;
