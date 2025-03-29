
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Volume, Volume1, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Narration scripts for each city in different languages
const narrativeScripts = {
  Delhi: {
    en: "Welcome to MyTreeMap's audio tour of Delhi's urban forests. Delhi, the capital of India, is home to over 2.3 million trees scattered across parks, roads, and forests like the Ridge and Sanjay Van. These trees play a crucial role in combating Delhi's air pollution, with species like Neem and Peepal being particularly effective at filtering particulate matter. Recent initiatives by the Delhi government, including the Tree Transplantation Policy, have aimed to increase green cover from the current 23% to 33%. Our data indicates that planting an additional 1.8 million trees could reduce Delhi's AQI by approximately 30%. Join our community efforts to map, monitor, and enhance Delhi's urban forest for a cleaner, greener capital.",
    hi: "दिल्ली के शहरी जंगलों के MyTreeMap के ऑडियो टूर में आपका स्वागत है। भारत की राजधानी दिल्ली में पार्कों, सड़कों और रिज और संजय वन जैसे जंगलों में फैले 2.3 मिलियन से अधिक पेड़ हैं। ये पेड़ दिल्ली के वायु प्रदूषण से निपटने में महत्वपूर्ण भूमिका निभाते हैं, जिसमें नीम और पीपल जैसी प्रजातियां विशेष रूप से कणिका तत्व को फ़िल्टर करने में प्रभावी हैं। दिल्ली सरकार द्वारा हाल की पहल, जिसमें वृक्ष प्रत्यारोपण नीति भी शामिल है, का उद्देश्य वर्तमान 23% से हरे आवरण को 33% तक बढ़ाना है। हमारे आंकड़े बताते हैं कि अतिरिक्त 1.8 मिलियन पेड़ लगाने से दिल्ली का AQI लगभग 30% कम हो सकता है। स्वच्छ, हरी राजधानी के लिए दिल्ली के शहरी जंगल का मानचित्रण, निगरानी और बढ़ाने के हमारे सामुदायिक प्रयासों में शामिल हों।",
    bn: "দিল্লীর শহুরে বনের MyTreeMap অডিও ট্যুরে আপনাকে স্বাগতম। ভারতের রাজধানী দিল্লীতে পার্ক, রাস্তা এবং রিজ এবং সঞ্জয় বন জাতীয় বনে ছড়িয়ে থাকা ২.৩ মিলিয়নেরও বেশি গাছ রয়েছে। এই গাছগুলি দিল্লীর বায়ু দূষণ মোকাবেলায় গুরুত্বপূর্ণ ভূমিকা পালন করে, যেখানে নিম এবং পিপুল জাতীয় গাছগুলি বিশেষভাবে কণাযুক্ত পদার্থ ফিল্টার করতে কার্যকর। দিল্লি সরকারের সাম্প্রতিক উদ্যোগগুলির মধ্যে রয়েছে ট্রি ট্রান্সপ্লান্টেশন পলিসি, যার লক্ষ্য বর্তমান ২৩% থেকে সবুজ আবরণ ৩৩% বাড়ানো। আমাদের তথ্য নির্দেশ করে যে অতিরিক্ত ১.৮ মিলিয়ন গাছ রোপণ করলে দিল্লীর AQI প্রায় ৩০% কমাতে পারে। একটি পরিষ্কার, সবুজ রাজধানীর জন্য দিল্লীর শহুরে বনকে মানচিত্রণ, পর্যবেক্ষণ এবং উন্নত করার আমাদের সম্প্রদায়ের প্রচেষ্টায় যোগ দিন।",
  },
  Mumbai: {
    en: "Welcome to MyTreeMap's audio guide to Mumbai's urban forest. As India's financial capital, Mumbai balances urbanization with nearly 3 million trees. The city's proximity to the Arabian Sea and its mangrove forests create a unique coastal urban ecosystem. Species like Banyan and Coconut trees are prevalent throughout the city, providing essential ecosystem services. Mumbai's green initiatives include the Mumbai Mangrove Conservation Unit and various citizen-led tree planting drives. Our data shows that increasing Mumbai's tree cover could significantly reduce temperatures in dense neighborhoods by up to 3-5°C during summer months. Explore the map to discover Mumbai's green spaces and learn how you can contribute to expanding this vital urban forest.",
    hi: "मुंबई के शहरी जंगल के MyTreeMap के ऑडियो गाइड में आपका स्वागत है। भारत की वित्तीय राजधानी के रूप में, मुंबई शहरीकरण के साथ लगभग 3 मिलियन पेड़ों का संतुलन बनाए रखती है। अरब सागर के निकट और उसके मैंग्रोव जंगल शहर के लिए एक अनूठा तटीय शहरी पारिस्थितिकी तंत्र बनाते हैं। बरगद और नारियल के पेड़ जैसी प्रजातियां पूरे शहर में व्यापक हैं, जो आवश्यक पारिस्थितिकी तंत्र सेवाएं प्रदान करती हैं। मुंबई की हरित पहलों में मुंबई मैंग्रोव संरक्षण इकाई और विभिन्न नागरिक-नेतृत्व वाले वृक्षारोपण अभियान शामिल हैं। हमारे आंकड़े बताते हैं कि मुंबई के पेड़ के आवरण को बढ़ाने से गर्मियों के महीनों के दौरान घने पड़ोस में तापमान में 3-5 डिग्री सेल्सियस तक की महत्वपूर्ण कमी आ सकती है। मुंबई के हरित स्थानों की खोज करने और यह जानने के लिए कि आप इस महत्वपूर्ण शहरी जंगल के विस्तार में कैसे योगदान दे सकते हैं, मानचित्र का पता लगाएं।",
  },
  // Additional cities would be added here
};

// For demo purposes, let's use free audio samples instead of paid ElevenLabs API
const audioGuides = {
  Delhi: {
    en: "https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg",
    hi: "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg",
    bn: "https://actions.google.com/sounds/v1/alarms/mechanical_clock_ring.ogg",
  },
  Mumbai: {
    en: "https://actions.google.com/sounds/v1/alarms/beep_short_on_off.ogg",
    hi: "https://actions.google.com/sounds/v1/alarms/beep_short_off.ogg",
  },
  // Demo audio for other cities would be added here
};

const languageOptions = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "bn", label: "Bengali" },
  { value: "ta", label: "Tamil" },
  { value: "te", label: "Telugu" },
  { value: "pa", label: "Punjabi" },
  { value: "gu", label: "Gujarati" },
  { value: "kn", label: "Kannada" },
  { value: "ml", label: "Malayalam" },
  { value: "or", label: "Odia" },
  { value: "as", label: "Assamese" },
  { value: "mr", label: "Marathi" },
];

interface AudioGuideProps {
  city: string;
}

const AudioGuide = ({ city }: AudioGuideProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [language, setLanguage] = useState("en");
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  // Initialize audio element
  useEffect(() => {
    // Create a new audio element if it doesn't exist
    if (!audioRef.current) {
      const audio = new Audio();
      audioRef.current = audio;
      
      // Add event listeners
      audio.addEventListener("canplaythrough", () => {
        console.log("Audio can play through");
        setAudioLoaded(true);
      });
      
      audio.addEventListener("ended", handleAudioEnded);
      
      audio.addEventListener("error", (e) => {
        console.error("Audio error:", e);
        toast({
          title: "Audio playback issue",
          description: "Using demo mode: audio clips represent what would be narrations in production.",
          variant: "default",
        });
      });
    }
    
    // Clean up
    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.removeEventListener("ended", handleAudioEnded);
        audio.removeEventListener("canplaythrough", () => {});
        audio.removeEventListener("error", () => {});
      }
    };
  }, []);

  // Update audio source when city or language changes
  useEffect(() => {
    try {
      if (!audioRef.current) return;
      
      // Stop current playback
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      
      // Default fallback audio
      const fallbackAudio = "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg";
      
      // Get the URL for the current city and language
      let audioUrl = fallbackAudio;
      
      try {
        const cityData = audioGuides[city as keyof typeof audioGuides];
        if (cityData) {
          const languageData = cityData[language as keyof typeof cityData];
          if (languageData) {
            audioUrl = languageData;
          }
        }
      } catch (err) {
        console.warn("Error getting audio URL, using fallback:", err);
      }
      
      console.log("Setting audio source to:", audioUrl);
      
      // Update audio source
      audioRef.current.src = audioUrl;
      audioRef.current.load();
      
      // Set volume
      audioRef.current.volume = isMuted ? 0 : volume / 100;
      
    } catch (error) {
      console.error("Error updating audio source:", error);
    }
  }, [city, language]);

  // Handle audio playback ended
  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  // Update volume when changed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const togglePlayPause = () => {
    try {
      if (!audioRef.current) {
        toast({
          title: "Error",
          description: "Audio player not initialized",
          variant: "destructive",
        });
        return;
      }
      
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Show toast before playing
        toast({
          description: `Playing demo audio for ${city}'s urban forest in ${languageOptions.find(l => l.value === language)?.label || 'English'}`,
        });
        
        // Play audio
        const playPromise = audioRef.current.play();
        
        // Handle potential play rejection (e.g., autoplay policy)
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(error => {
              console.error("Audio playback error:", error);
              toast({
                title: "Demo mode",
                description: "In production, this would play actual narrated tour content from ElevenLabs.",
                variant: "default",
              });
            });
        }
      }
    } catch (error) {
      console.error("Toggle play/pause error:", error);
      toast({
        title: "Error",
        description: "Failed to control audio playback",
        variant: "destructive",
      });
    }
  };

  const toggleMute = () => {
    try {
      if (!audioRef.current) return;
      
      const newMuteState = !isMuted;
      setIsMuted(newMuteState);
      
      if (audioRef.current) {
        audioRef.current.volume = newMuteState ? 0 : volume / 100;
      }
    } catch (error) {
      console.error("Toggle mute error:", error);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    try {
      setVolume(value[0]);
      
      // If unmuting via volume slider
      if (isMuted && value[0] > 0) {
        setIsMuted(false);
      }
      
      // Update audio volume
      if (audioRef.current) {
        audioRef.current.volume = isMuted ? 0 : value[0] / 100;
      }
    } catch (error) {
      console.error("Volume change error:", error);
    }
  };
  
  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    
    toast({
      description: `Language changed to ${languageOptions.find(l => l.value === value)?.label || 'English'}`,
    });
  };
  
  const toggleTranscript = () => {
    setShowTranscript(!showTranscript);
  };
  
  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX className="h-4 w-4" />;
    if (volume < 30) return <Volume className="h-4 w-4" />;
    if (volume < 70) return <Volume1 className="h-4 w-4" />;
    return <Volume2 className="h-4 w-4" />;
  };

  // Get the transcript for the current city and language
  const getCurrentTranscript = () => {
    try {
      const cityScripts = narrativeScripts[city as keyof typeof narrativeScripts];
      if (!cityScripts) return narrativeScripts.Delhi.en;
      
      const languageScript = cityScripts[language as keyof typeof cityScripts];
      return languageScript || cityScripts.en;
    } catch (err) {
      console.warn("Error getting transcript, using default:", err);
      return narrativeScripts.Delhi.en;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 pb-4">
        <CardTitle className="text-sm md:text-base flex items-center gap-2">
          <Volume2 className="h-4 w-4 text-forest" />
          <span>Audio Tour Guide</span>
        </CardTitle>
        <CardDescription className="text-xs">
          Listen to a narrated guide about {city}'s urban forest in your preferred language
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Languages className="h-4 w-4 text-forest" />
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className={`${isPlaying ? 'bg-forest text-white hover:bg-forest-dark' : ''}`}
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            
            <div className="flex items-center gap-2 flex-1">
              <Button variant="ghost" size="icon" onClick={toggleMute} className="h-8 w-8">
                {getVolumeIcon()}
              </Button>
              
              <Slider
                value={[volume]}
                max={100}
                step={1}
                className="flex-1"
                onValueChange={handleVolumeChange}
              />
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2" 
            onClick={toggleTranscript}
          >
            {showTranscript ? "Hide Transcript" : "Show Transcript"}
          </Button>
          
          {showTranscript && (
            <div className="mt-2 p-3 bg-gray-50 rounded-md text-sm text-gray-700 max-h-40 overflow-y-auto">
              {getCurrentTranscript()}
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="text-xs text-gray-500 border-t bg-gray-50 px-4 py-2">
        <div className="w-full flex items-center justify-between">
          <span>Demo Mode</span>
          <span>Tour Guide • {city} • {languageOptions.find(l => l.value === language)?.label || 'English'}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AudioGuide;
