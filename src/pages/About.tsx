
import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Mail, Trees, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
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
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-forest mb-4 flex items-center">
            <Trees className="h-8 w-8 mr-3 text-forest" />
            About TreeCity Explorer
          </h1>
          
          <p className="text-gray-700 mb-6">
            TreeCity Explorer is an innovative platform designed to map, monitor, and celebrate India's urban forests.
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
                    Passionate about environmental sustainability and technology, Mohit created TreeCity Explorer
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
              TreeCity Explorer is an open-source project. We welcome contributions from developers, 
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

export default About;
