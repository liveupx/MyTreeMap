
import React from "react";
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
          <CardTitle>About TreeCity Explorer</CardTitle>
        </div>
        <CardDescription>
          Exploring urban forests across Indian cities
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">
          TreeCity Explorer is a comprehensive platform for tracking and visualizing the urban forest in cities across India. 
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
              TreeCity Explorer combines multiple data sources including:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc pl-5">
              <li>Government forest department statistics</li>
              <li>Satellite imagery analysis</li>
              <li>Citizen science tree mapping initiatives</li>
              <li>Air quality monitoring networks</li>
              <li>Population and urban development data</li>
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
            AQI data is sourced from official monitoring stations and validated with third-party sensors.
            Population figures are based on the latest available census data and projections.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Our tree requirement calculations are based on the standard recommendation of at least 2 trees per person
            to ensure adequate air filtration and environmental benefits.
          </p>
        </div>
        
        <Separator className="my-4" />
        
        <div>
          <h3 className="text-lg font-semibold mb-2">About the Founder</h3>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center text-white text-2xl font-bold">
              MC
            </div>
            <div>
              <h4 className="font-semibold">Mohit Chaprana</h4>
              <p className="text-sm text-gray-600">Founder of Liveupx.com</p>
              <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                <MapPin size={12} />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Mohit Chaprana, founder of Liveupx.com, created TreeCity Explorer to bridge the gap between environmental data and public awareness.
            With a background in environmental science and data visualization, Mohit is passionate about using technology to drive positive change
            for India's urban environments.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:space-y-0">
        <Button variant="outline" className="w-full sm:w-auto">
          <Mail className="mr-2 h-4 w-4" />
          Contact Us
        </Button>
        <Button className="w-full sm:w-auto bg-forest hover:bg-forest-dark">
          <ExternalLink className="mr-2 h-4 w-4" />
          Visit Liveupx.com
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AboutSection;
