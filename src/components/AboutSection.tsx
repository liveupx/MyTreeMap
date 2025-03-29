
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, MapPin, TreeDeciduous } from "lucide-react";

const AboutSection = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <TreeDeciduous className="h-6 w-6 text-forest" />
          <CardTitle>About MyTreeMaps</CardTitle>
        </div>
        <CardDescription>
          Exploring urban forests across Indian cities
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">
          MyTreeMaps is a comprehensive platform for tracking and visualizing the urban forest in cities across India. 
          Our mission is to promote awareness of urban trees, their importance for air quality and human health, 
          and to provide accurate data to support tree conservation and planting initiatives.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600">
              We believe that trees are vital infrastructure for Indian cities, especially in the context of rising air pollution
              and climate challenges. Through data visualization and public engagement, we aim to:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc pl-5">
              <li>Increase awareness of urban forests</li>
              <li>Track tree planting progress in real-time</li>
              <li>Highlight the connection between trees and air quality</li>
              <li>Provide tools for better urban forest management</li>
              <li>Encourage community participation in tree stewardship</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">How We Work</h3>
            <p className="text-sm text-gray-600">
              MyTreeMaps combines multiple data sources including:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc pl-5">
              <li><a href="https://forest.delhi.gov.in/forest-census.html" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">Government forest department statistics</a></li>
              <li><a href="https://www.iirs.gov.in/research-publications" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">Satellite imagery analysis</a></li>
              <li><a href="https://www.ias.ac.in/public/citizen-science-initiatives/" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">Citizen science tree mapping initiatives</a></li>
              <li><a href="https://cpcb.nic.in/air-quality-data/" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">Air quality monitoring networks</a></li>
              <li><a href="https://censusindia.gov.in/" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">Population and urban development data</a></li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              Our platform is updated regularly to provide the most current information available.
            </p>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Data Sources & Methodology</h3>
          <p className="text-sm text-gray-600">
            We source our tree data from municipal forest departments, satellite imagery analysis, and community mapping projects.
            AQI data is sourced from <a href="https://cpcb.nic.in/air-quality-data/" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">official monitoring stations</a> and validated with third-party sensors.
            Population figures are based on the <a href="https://censusindia.gov.in/" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">latest available census data</a> and projections.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Our tree requirement calculations are based on the standard recommendation of at least 2 trees per person
            to ensure adequate air filtration and environmental benefits. Visit our <Link to="/methodology" className="text-forest hover:underline">Methodology page</Link> for detailed information.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:space-y-0">
        <Button variant="outline" className="w-full sm:w-auto" asChild>
          <Link to="/contact">
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Link>
        </Button>
        <Button className="w-full sm:w-auto bg-forest hover:bg-forest-dark" asChild>
          <a href="https://mytreemap.netlify.app" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit MyTreeMaps
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AboutSection;
