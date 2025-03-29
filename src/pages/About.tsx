import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Mail, Trees, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-soil to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-forest mb-4 flex items-center">
            <Trees className="h-8 w-8 mr-3 text-forest" />
            About MyTreeMaps
          </h1>
          
          <p className="text-gray-700 mb-6">
            MyTreeMaps is an innovative platform designed to map, monitor, and celebrate India's urban forests.
            Our mission is to create awareness about the importance of trees in our cities and to 
            provide valuable data that can help in urban forest management and conservation efforts.
          </p>

          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              We envision Indian cities where trees are valued, protected, and integrated into urban planning. 
              By providing accessible data on urban trees, we aim to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Increase awareness about the importance of urban forests</li>
              <li>Support data-driven urban forestry management</li>
              <li>Encourage community participation in tree planting and care initiatives</li>
              <li>Provide tools for researchers, planners, and policymakers</li>
              <li>Promote the benefits of trees for air quality, health, and climate resilience</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">The Team</h2>
            <div className="bg-forest/5 p-5 rounded-lg">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <Trees className="w-16 h-16 text-forest" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Mohit Chaprana</h3>
                  <p className="text-gray-600 mb-2">Founder of Liveupx.com</p>
                  <p className="text-gray-700 mb-4">
                    Passionate about environmental sustainability and technology, Mohit created MyTreeMaps
                    to bridge the gap between urban development and environmental conservation. His vision is to 
                    provide tools that make urban forest data accessible to everyone.
                  </p>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                      <a href="mailto:ceo@liveupx.com">
                        <Mail className="h-4 w-4" />
                        Contact
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                      <a href="https://liveupx.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        liveupx.com
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Open Source Project</h2>
            <p className="text-gray-700 mb-4">
              MyTreeMaps is an open-source project. We welcome contributions from developers, 
              data scientists, urban planners, and tree enthusiasts.
            </p>
            <Button variant="default" className="bg-forest hover:bg-forest/90" asChild>
              <a href="https://github.com/mohitchaprana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Contribute to the Project
              </a>
            </Button>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-amber-800 mb-2">Get Involved</h2>
            <p className="text-amber-700">
              We're always looking for partners, contributors, and supporters. If you're interested in 
              collaborating with us or supporting our mission, please reach out at{" "}
              <a href="mailto:mohit@liveupx.com" className="underline hover:text-amber-900">mohit@liveupx.com</a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
