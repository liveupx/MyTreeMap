
import React, { useState } from "react";
import { Bot, Upload, XCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

// This component would typically use Claude API via Supabase Edge Functions
// For the prototype, we'll simulate responses
const TreeIdentifier = () => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [result, setResult] = useState<null | {
    species: string;
    scientificName: string;
    confidence: number;
    description: string;
    benefits: string[];
  }>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setFileName(file.name);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setImage(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImage(null);
    setFileName("");
    setResult(null);
  };

  const identifyTree = async () => {
    if (!image) return;
    
    setIsIdentifying(true);
    
    // This would be a call to Claude API via Supabase Edge Functions
    // Simulating API call delay and response
    try {
      setTimeout(() => {
        // Mock results based on common Indian trees
        const mockResults = [
          {
            species: "Neem Tree",
            scientificName: "Azadirachta indica",
            confidence: 92,
            description: "The neem tree is native to India and is widely known for its medicinal properties. Its leaves, bark, and seeds are used in traditional medicine.",
            benefits: ["Air purification", "Medicinal properties", "Insect repellent", "Provides shade"]
          },
          {
            species: "Banyan Tree",
            scientificName: "Ficus benghalensis",
            confidence: 89,
            description: "The banyan tree is India's national tree. It has aerial roots that grow downward and can cover vast areas, providing shelter and oxygen.",
            benefits: ["Carbon sequestration", "Soil conservation", "Habitat for wildlife", "Cultural significance"]
          },
          {
            species: "Peepal Tree",
            scientificName: "Ficus religiosa",
            confidence: 87,
            description: "The peepal tree, also known as the sacred fig, is revered in Hinduism and Buddhism. It releases oxygen even at night, making it an important urban tree.",
            benefits: ["24-hour oxygen production", "Reduces air pollution", "Religious significance", "Long lifespan"]
          }
        ];
        
        setResult(mockResults[Math.floor(Math.random() * mockResults.length)]);
        setIsIdentifying(false);
        
        toast({
          title: "Tree Identified",
          description: "The AI has analyzed your tree image.",
        });
      }, 2000);
    } catch (error) {
      toast({
        title: "Identification failed",
        description: "There was an error identifying the tree. Please try again.",
        variant: "destructive",
      });
      setIsIdentifying(false);
    }
  };

  return (
    <Card className="w-full max-w-xl bg-white shadow-md">
      <CardHeader className="bg-gradient-to-r from-forest-light to-forest/10 pb-6">
        <CardTitle className="flex items-center gap-2 text-xl text-forest">
          <Bot className="h-5 w-5" />
          <span>AI Tree Identifier</span>
        </CardTitle>
        <CardDescription>
          Upload a photo of a tree to identify its species using Claude AI
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        {!image ? (
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <Upload className="h-10 w-10 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500 mb-4">
              Upload a clear photo of a tree to identify it
            </p>
            <Input
              id="tree-image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <Label
              htmlFor="tree-image"
              className="bg-forest text-white px-4 py-2 rounded-md cursor-pointer hover:bg-forest-dark transition-colors"
            >
              Select Image
            </Label>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <img
                src={image}
                alt="Tree to identify"
                className="w-full h-64 object-cover rounded-lg"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={clearImage}
              >
                <XCircle className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 text-center">
              {fileName}
            </p>
            
            {!result && (
              <Button 
                className="w-full" 
                onClick={identifyTree}
                disabled={isIdentifying}
              >
                {isIdentifying ? "Identifying..." : "Identify Tree"}
              </Button>
            )}
            
            {result && (
              <div className="mt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-forest">{result.species}</h3>
                    <p className="text-sm text-gray-500 italic">{result.scientificName}</p>
                  </div>
                  <div className="bg-forest-light/20 px-3 py-1 rounded-full text-sm">
                    {result.confidence}% match
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium mb-1">About this tree:</h4>
                  <p className="text-sm text-gray-700">{result.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Environmental Benefits:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {result.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Leaf className="h-3 w-3 text-forest" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="bg-gray-50 px-6 py-4 text-xs text-gray-500">
        Powered by Claude AI • For educational purposes only
      </CardFooter>
    </Card>
  );
};

export default TreeIdentifier;
