
import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Trees, Users, Map, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const partners = [
  {
    id: 1,
    name: "Green Delhi Initiative",
    type: "NGO",
    location: "Delhi",
    description: "A grassroots organization focused on increasing Delhi's green cover through community tree planting initiatives.",
    contribution: "Data collection and community mobilization",
    website: "https://greendelhi.org"
  },
  {
    id: 2,
    name: "EcoSolutions India",
    type: "Private Company",
    location: "Mumbai",
    description: "A sustainability consulting firm that develops innovative solutions for urban environmental challenges.",
    contribution: "Technical expertise and funding support",
    website: "https://ecosolutions.in"
  },
  {
    id: 3,
    name: "Bengaluru Tree Trust",
    type: "Foundation",
    location: "Bangalore",
    description: "A citizen-led trust dedicated to protecting and expanding Bangalore's urban forest through advocacy and action.",
    contribution: "Tree census coordination and volunteer management",
    website: "https://bengalurutreetrust.org"
  },
  {
    id: 4,
    name: "Indian Institute of Forest Management",
    type: "Academic Institution",
    location: "Bhopal",
    description: "A premier forestry education institution providing research and expertise in sustainable forest management.",
    contribution: "Research methodology and scientific validation",
    website: "https://iifm.ac.in"
  },
  {
    id: 5,
    name: "Breath India",
    type: "NGO",
    location: "Multiple Cities",
    description: "An organization committed to improving air quality through nature-based solutions and policy advocacy.",
    contribution: "Air quality monitoring and correlation analysis",
    website: "https://breathindia.org"
  },
  {
    id: 6,
    name: "Urban Climate Resilience Network",
    type: "Research Consortium",
    location: "New Delhi",
    description: "A network of researchers and practitioners working on climate resilience in Indian cities.",
    contribution: "Climate modeling and adaptation strategies",
    website: "https://urbanclimate.in"
  },
  {
    id: 7,
    name: "City Forest Department",
    type: "Government",
    location: "Multiple Cities",
    description: "Municipal forest departments responsible for managing and maintaining urban trees.",
    contribution: "Official tree data and maintenance records",
    website: "https://forestdept.gov.in"
  },
  {
    id: 8,
    name: "Liveupx",
    type: "Technology Partner",
    location: "Delhi",
    description: "A technology company specializing in environmental data visualization and analytics platforms.",
    contribution: "Platform development and technical infrastructure",
    website: "https://liveupx.com"
  }
];

const Partners = () => {
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
          <div className="flex items-center mb-6">
            <Users className="h-7 w-7 text-forest mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Partner Organizations</h1>
          </div>
          
          <p className="text-gray-700 mb-8 max-w-3xl">
            TreeCity Explorer is made possible through collaboration with a diverse network of organizations
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
                TreeCity Explorer, please get in touch with us.
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
          
          <div className="bg-forest/5 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Acknowledgments</h2>
            <p className="text-gray-700 mb-6">
              We would like to express our gratitude to all the organizations, volunteers, and individuals
              who have contributed to TreeCity Explorer. Your dedication to urban forests and sustainable
              cities has been essential to our mission.
            </p>
            <p className="text-gray-700">
              Special thanks to Mohit Chaprana, founder of Liveupx.com, for initiating and supporting
              this project, and to all our data contributors and technical advisors.
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

export default Partners;
