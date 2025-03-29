import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Trees, Users, Map, Mail, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const partners = [
  {
    id: 1,
    name: "Liveupx",
    type: "Technology Partner",
    location: "Delhi",
    description: "A technology company specializing in environmental data visualization and analytics platforms.",
    contribution: "Platform development and technical infrastructure",
    website: "https://liveupx.com"
  },
  {
    id: 2,
    name: "MentorJi.live",
    type: "Education Partner",
    location: "Mumbai",
    description: "An online mentoring platform connecting environmental experts with students and budding environmentalists.",
    contribution: "Educational content and expert connections",
    website: "https://mentorji.live"
  },
  {
    id: 3,
    name: "Widgetx.Site",
    type: "Integration Partner",
    location: "Bangalore",
    description: "A widget platform that enables ecosystem integration and data sharing across environmental initiatives.",
    contribution: "Widget technology and distribution",
    website: "https://widgetx.site"
  },
  {
    id: 4,
    name: "SayEarth.Org",
    type: "Environmental NGO",
    location: "Delhi",
    description: "An organization dedicated to environmental conservation through community engagement and education.",
    contribution: "Community outreach and volunteer mobilization",
    website: "https://sayearth.org"
  },
  {
    id: 5,
    name: "CaringAdoptions.org",
    type: "Social Impact Partner",
    location: "Multiple Cities",
    description: "A platform connecting people with adoption opportunities for trees and green spaces in urban areas.",
    contribution: "Tree adoption programs and community care initiatives",
    website: "https://caringadoptions.org"
  },
  {
    id: 6,
    name: "Pitch-Deck.Agency",
    type: "Communication Partner",
    location: "Hyderabad",
    description: "A communications agency helping environmental initiatives effectively pitch their ideas to potential funders.",
    contribution: "Communication strategy and funding connections",
    website: "https://pitch-deck.agency"
  },
  {
    id: 7,
    name: "Gurjar.App",
    type: "Community Partner",
    location: "Rajasthan",
    description: "A mobile application connecting rural and urban communities for environmental conservation initiatives.",
    contribution: "Rural-urban community integration",
    website: "https://gurjar.app"
  },
  {
    id: 8,
    name: "AlfaCare",
    type: "Healthcare Partner",
    location: "Multiple Cities",
    description: "A healthcare organization focused on the relationship between urban green spaces and public health.",
    contribution: "Research on health impacts of urban forests",
    website: "https://alfacare.org"
  }
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-soil to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <Users className="h-7 w-7 text-forest mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Partner Organizations</h1>
          </div>
          
          <p className="text-gray-700 mb-8 max-w-3xl">
            MyTreeMaps is made possible through collaboration with a diverse network of organizations
            committed to urban forest conservation and sustainable cities. We're grateful for the contributions
            of our partners across India.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partners.map(partner => (
              <div key={partner.id} className="bg-white rounded-xl shadow-sm overflow-hidden border hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{partner.name}</h3>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{partner.type}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Map className="h-3 w-3 mr-1 text-gray-400" />
                    <span>{partner.location}</span>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4">{partner.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-500 uppercase mb-1">Contribution</h4>
                    <p className="text-sm text-forest font-medium">{partner.contribution}</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Visit Website</span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Become a Partner</h2>
              <p className="text-gray-700 mb-6">
                We're always looking to expand our network of partners to improve tree data collection, analysis,
                and advocacy across Indian cities. If your organization is interested in collaborating with
                MyTreeMaps, please get in touch with us.
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Partnership Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-forest/10 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-forest rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-700">Access to comprehensive urban forest data for research and planning</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-forest/10 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-forest rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-700">Collaboration opportunities with diverse stakeholders</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-forest/10 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-forest rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-700">Enhanced visibility through our platform and network</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-forest/10 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-forest rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-700">Technical support for urban forestry initiatives</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-forest/10 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-forest rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-700">Joint funding opportunities for urban forest projects</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-forest/10 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-forest rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-700">Custom data solutions for specific organizational needs</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="default" asChild>
                  <a href="mailto:mohit@liveupx.com?subject=Partnership%20Inquiry" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Contact for Partnership</span>
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Partners;
