
import React, { useState, useEffect } from "react";
import { Users, Send, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase-client";
import { format } from "date-fns";

// Define the type for the contribution data
interface Contribution {
  id: number;
  name: string;
  location: string;
  message: string;
  created_at: string;
  avatar?: string;
}

const CommunityContributions = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Fetch contributions on component mount
  useEffect(() => {
    fetchContributions();
  }, []);

  // Mock data for initial display
  const mockContributions = [
    {
      id: 1,
      name: "Rajiv Sharma",
      location: "Mumbai",
      message: "Planted 5 neem trees in our community garden last weekend. The kids from the local school joined us!",
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
      avatar: "RS"
    },
    {
      id: 2,
      name: "Meera Patel",
      location: "Delhi",
      message: "Reported 3 illegal tree cuttings to the municipality. They've taken action and stopped the removal!",
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
      avatar: "MP"
    },
    {
      id: 3,
      name: "Sanjay Kumar",
      location: "Bangalore",
      message: "Our tech company just completed the 'One Employee, One Tree' initiative. 200 new trees planted across the city.",
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // 1 week ago
      avatar: "SK"
    }
  ];

  // Fetch contributions from Supabase (falls back to mock data)
  const fetchContributions = async () => {
    setIsLoading(true);
    try {
      console.log("Fetching contributions...");
      
      // Try to fetch from Supabase (will likely fail in demo mode)
      const { data, error } = await supabase
        .from('community_contributions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) {
        console.warn("Error fetching from Supabase, using mock data:", error);
        // Use mock data if Supabase fails
        setContributions(mockContributions);
      } else if (data && data.length > 0) {
        console.log("Got data from Supabase:", data);
        setContributions(data);
      } else {
        console.log("No data from Supabase, using mock data");
        setContributions(mockContributions);
      }
    } catch (error) {
      console.error("Error in fetchContributions:", error);
      // Fall back to mock data
      setContributions(mockContributions);
    } finally {
      setIsLoading(false);
    }
  };

  // Verify content with AI (simulated for demo)
  const verifyContent = async (content: string) => {
    // Simulate verification
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        // For demo purposes, reject content with banned words
        const bannedWords = ['spam', 'inappropriate', 'offensive'];
        const hasBannedWord = bannedWords.some(word => 
          content.toLowerCase().includes(word)
        );
        resolve(!hasBannedWord);
      }, 1000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !location || !message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields to submit your contribution",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    setIsVerifying(true);
    
    try {
      // First, verify the content with AI
      const isContentAppropriate = await verifyContent(message);
      
      if (!isContentAppropriate) {
        toast({
          title: "Content not allowed",
          description: "Your submission contains inappropriate content. Please revise and try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        setIsVerifying(false);
        return;
      }
      
      setIsVerifying(false);
      
      // Content passed verification, create new contribution
      const avatarInitials = name.split(' ').map(n => n[0]).join('').toUpperCase();
      
      const newContribution: Partial<Contribution> = {
        name,
        location,
        message,
        avatar: avatarInitials,
        created_at: new Date().toISOString(),
      };
      
      // Try to save to Supabase (will likely fail in demo mode)
      try {
        const { data, error } = await supabase
          .from('community_contributions')
          .insert([newContribution])
          .select();
        
        if (error) {
          console.warn("Error saving to Supabase, falling back to local state update:", error);
          throw error;
        }
        
        if (data && data.length > 0) {
          console.log("Successfully added to Supabase:", data);
          // Add to local state
          setContributions(prev => [data[0], ...prev]);
        }
      } catch (error) {
        console.warn("Supabase insertion failed, adding to local state only");
        
        // Simulate adding locally with a generated ID
        const simulatedId = Math.floor(Math.random() * 10000);
        const mockContribution = {
          ...newContribution,
          id: simulatedId,
        } as Contribution;
        
        setContributions(prev => [mockContribution, ...prev]);
        
        toast({
          title: "Contribution added",
          description: "Your story has been shared with the community",
        });
      }
      
      // Clear form
      setName("");
      setLocation("");
      setMessage("");
      
    } catch (error) {
      console.error("Error submitting contribution:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your contribution. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setIsVerifying(false);
    }
  };

  // Format date as relative time (e.g., "2 days ago")
  const formatRelativeTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
      
      if (diffInSeconds < 60) return 'just now';
      if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
      if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
      if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
      if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
      
      // If more than a month, use formatted date
      return format(date, 'MMM d, yyyy');
    } catch (error) {
      console.error("Error formatting date:", error);
      return 'unknown time';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
        <CardTitle className="flex items-center gap-2 text-forest">
          <Users className="h-5 w-5" />
          <span>Community Contributions</span>
        </CardTitle>
        <CardDescription>
          Share your tree planting and conservation stories
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          {isLoading ? (
            <div className="flex justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
            </div>
          ) : contributions.length === 0 ? (
            <div className="text-center p-4 text-gray-500">
              <div className="text-sm">No contributions yet. Be the first to share your story!</div>
            </div>
          ) : (
            contributions.map((contribution) => (
              <div key={contribution.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-forest text-white">{contribution.avatar || contribution.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{contribution.name}</span>
                    <span className="text-xs text-gray-500">from {contribution.location}</span>
                  </div>
                  <p className="text-sm text-gray-700">{contribution.message}</p>
                  <p className="text-xs text-gray-500">{formatRelativeTime(contribution.created_at)}</p>
                </div>
              </div>
            ))
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 border-t pt-4">
          <h3 className="text-sm font-medium">Share your contribution</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">City</Label>
              <Input 
                id="location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="Your city"
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Your Tree Story</Label>
            <Textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Share your tree planting or conservation experience"
              className="resize-none"
              rows={3}
              disabled={isSubmitting}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                {isVerifying ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    <span>Verifying content...</span>
                  </>
                ) : (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    <span>Submitting...</span>
                  </>
                )}
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                <span>Submit Contribution</span>
              </>
            )}
          </Button>
        </form>
      </CardContent>
      
      <CardFooter className="bg-gray-50 px-6 py-3 text-xs text-gray-500 flex justify-between">
        <span>Content is verified before posting</span>
        <span>Demo Mode • Local Storage</span>
      </CardFooter>
    </Card>
  );
};

export default CommunityContributions;
