
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

interface CitySelectorProps {
  selectedCity?: string;
  onChange: (city: string) => void;
  onCityChange?: (city: string) => void; // For backward compatibility
}

const cities = [
  { name: "Delhi", state: "Delhi", population: "20.59M", treeCount: "2.38M" },
  { name: "New Delhi", state: "Delhi", population: "257K", treeCount: "1.26M" },
  { name: "Mumbai", state: "Maharashtra", population: "12.44M", treeCount: "2.98M" },
  { name: "Bangalore", state: "Karnataka", population: "8.44M", treeCount: "1.86M" },
  { name: "Chennai", state: "Tamil Nadu", population: "7.09M", treeCount: "1.42M" },
  { name: "Kolkata", state: "West Bengal", population: "4.5M", treeCount: "1.2M" },
  { name: "Hyderabad", state: "Telangana", population: "6.81M", treeCount: "1.74M" },
  { name: "Ahmedabad", state: "Gujarat", population: "5.57M", treeCount: "1.12M" },
];

const CitySelector: React.FC<CitySelectorProps> = ({ selectedCity = "Delhi", onChange, onCityChange }) => {
  const handleChange = (value: string) => {
    onChange(value);
    if (onCityChange) onCityChange(value);
  };

  return (
    <div className="flex items-center space-x-2">
      <MapPin className="h-5 w-5 text-forest" />
      <Select
        value={selectedCity}
        onValueChange={handleChange}
      >
        <SelectTrigger className="w-[200px] border-forest/20 focus:ring-forest/30">
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem 
              key={city.name} 
              value={city.name}
              className="flex justify-between"
            >
              <div className="flex justify-between w-full">
                <span>{city.name}</span>
                <span className="text-gray-400 text-xs">
                  {city.treeCount} trees
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CitySelector;
