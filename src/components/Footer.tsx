
import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Trees, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Trees className="h-5 w-5 md:h-6 md:w-6 mr-2 text-forest-light" />
              <h3 className="text-lg md:text-xl font-bold">MyTreeMaps</h3>
            </div>
            <p className="text-xs md:text-sm text-gray-400">
              Mapping and monitoring urban forests across Indian cities to create healthier, greener urban environments.
            </p>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/cities" className="hover:text-white transition-colors">Cities</Link>
              </li>
              <li>
                <Link to="/widgets" className="hover:text-white transition-colors">Widgets</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Data & Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/methodology" className="hover:text-white transition-colors">Methodology</Link>
              </li>
              <li>
                <Link to="/api-documentation" className="hover:text-white transition-colors">API Documentation</Link>
              </li>
              <li>
                <Link to="/research-papers" className="hover:text-white transition-colors">Research Papers</Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white transition-colors">Partner Organizations</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Connect With Us</h4>
            <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
              Have questions or suggestions? Reach out to us via email or social media.
            </p>
            <Button variant="outline" size="sm" className="bg-transparent" asChild>
              <a href="mailto:ceo@liveupx.com">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </a>
            </Button>
            <div className="mt-4">
              <a href="https://widgetx.site" target="_blank" rel="noopener noreferrer" className="text-xs text-forest-light hover:text-white transition-colors block mb-1">
                More widgets: widgetx.site
              </a>
              <a href="mailto:mohit@liveupx.com" className="text-xs text-forest-light hover:text-white transition-colors block">
                For Support/Help/Donation: mohit@liveupx.com
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 md:my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-gray-400">
            © 2024 MyTreeMaps. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0">
            <a href="https://mytreemap.netlify.app" target="_blank" rel="noopener noreferrer" className="text-forest-light hover:text-white transition-colors inline-flex items-center text-sm">
              <span>Visit MyTreeMaps</span>
              <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
