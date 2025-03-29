
import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FounderSection = () => {
  return (
    <div className="bg-forest/5 py-8 px-4 rounded-lg">
      <div className="container mx-auto max-w-5xl text-center">
        <p className="text-gray-700 mb-3">
          Made with love by <span className="font-semibold">Mohit Chaprana</span>
        </p>
        <p className="text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
          Serial Entrepreneur & Angel Investor
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="outline" size="sm" asChild>
            <a href="https://liveupx.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <span>Liveupx.com</span>
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="mailto:mohit@liveupx.com" className="flex items-center">
              <span>Contact Mohit</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
