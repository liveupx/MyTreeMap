
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TreePine, Info, MapPin, Copy, ExternalLink } from "lucide-react";

const Navigation = () => {
  return (
    <header className="bg-forest text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-3 md:mb-0">
          <TreePine className="h-7 w-7 mr-2 animate-leaf-sway" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold font-heading">MyTreeMaps</h1>
            <p className="text-xs md:text-sm text-forest-light">Urban Forests Across India</p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 justify-center w-full md:w-auto">
          <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" size="sm" asChild>
            <Link to="/">
              <TreePine className="h-4 w-4 mr-2" />
              <span>Home</span>
            </Link>
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" size="sm" asChild>
            <Link to="/about">
              <Info className="h-4 w-4 mr-2" />
              <span>About</span>
            </Link>
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" size="sm" asChild>
            <Link to="/cities">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Cities</span>
            </Link>
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" size="sm" asChild>
            <Link to="/widgets">
              <Copy className="h-4 w-4 mr-2" />
              <span>Widgets</span>
            </Link>
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" size="sm" asChild>
            <Link to="/contact">
              <ExternalLink className="h-4 w-4 mr-2" />
              <span>Contact</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
