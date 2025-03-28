
import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Trees, FileText, Download, Bookmark, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const papers = [
  {
    id: "paper1",
    title: "Urban Tree Cover and Air Quality: A Correlation Study in Delhi",
    authors: "Sharma, A., Patel, R., & Chaprana, M.",
    year: 2023,
    journal: "Journal of Urban Ecology",
    abstract: "This study examines the relationship between urban tree cover and air pollution in Delhi. Using data collected from TreeCity Explorer and government air quality monitoring stations, we analyze how tree density correlates with PM2.5 and PM10 levels across different neighborhoods. The results indicate that areas with higher tree density consistently show lower particulate matter concentrations, with the most significant effects observed in neighborhoods with at least 30 trees per hectare.",
    keywords: ["Urban forestry", "Air pollution", "Delhi", "PM2.5", "Tree density"],
    category: "air-quality"
  },
  {
    id: "paper2",
    title: "Effectiveness of Tree Census Methodologies in Indian Urban Environments",
    authors: "Chaprana, M., Singh, L., & Kumar, V.",
    year: 2022,
    journal: "Urban Forestry & Urban Greening",
    abstract: "This paper evaluates different methodologies for conducting tree censuses in Indian cities, comparing satellite-based analyses, field surveys, and community reporting approaches. We assess the accuracy, cost-effectiveness, and scalability of each method across multiple cities. The findings suggest that a hybrid approach combining high-resolution satellite imagery with targeted field validation provides the most reliable tree count data while remaining economically viable for large-scale urban forest inventories.",
    keywords: ["Tree census", "Methodology", "Remote sensing", "Community science", "Urban inventory"],
    category: "methodology"
  },
  {
    id: "paper3",
    title: "Mapping Tree Species Diversity in Bangalore's Urban Forest",
    authors: "Reddy, K., Chaprana, M., & Thomas, S.",
    year: 2022,
    journal: "Biodiversity and Conservation",
    abstract: "This research maps the species diversity of Bangalore's urban forest using data from the TreeCity Explorer platform. We analyze the distribution of native versus exotic species across different land use types, including streets, parks, and institutional campuses. The study reveals that while overall tree cover in Bangalore is relatively high compared to other Indian cities, native species representation is uneven, with street trees dominated by a small number of exotic species. We propose strategic interventions to enhance native biodiversity while maintaining urban forest resilience.",
    keywords: ["Biodiversity", "Species diversity", "Native trees", "Bangalore", "Urban planning"],
    category: "biodiversity"
  },
  {
    id: "paper4",
    title: "Economic Valuation of Ecosystem Services Provided by Mumbai's Urban Trees",
    authors: "Desai, P., Chaprana, M., & Joshi, N.",
    year: 2023,
    journal: "Ecological Economics",
    abstract: "This study provides an economic valuation of ecosystem services delivered by Mumbai's urban forest. Using i-Tree Eco modeling and local data from TreeCity Explorer, we quantify the monetary value of carbon sequestration, air pollution removal, stormwater interception, and energy conservation benefits. The results indicate that Mumbai's 2.98 million trees provide annual ecosystem services worth approximately ₹1.4 billion, demonstrating the substantial economic return on investment in urban tree planting and maintenance.",
    keywords: ["Ecosystem services", "Economic valuation", "Mumbai", "Carbon sequestration", "Green infrastructure"],
    category: "economics"
  },
  {
    id: "paper5",
    title: "Community Participation in Urban Forest Management: Case Studies from Indian Cities",
    authors: "Agarwal, S., Chaprana, M., & Patel, D.",
    year: 2022,
    journal: "Urban Forestry & Urban Greening",
    abstract: "This paper examines community participation models in urban forest management across five Indian cities, highlighting examples from TreeCity Explorer's network of volunteer groups. Through stakeholder interviews and program evaluations, we identify key success factors and barriers to sustained community engagement. The findings emphasize the importance of institutional support, technical training, and accessible digital tools for monitoring and reporting. The paper concludes with recommendations for scaling successful community stewardship models nationwide.",
    keywords: ["Community engagement", "Participatory management", "Volunteering", "Urban governance", "Stewardship"],
    category: "community"
  },
  {
    id: "paper6",
    title: "Climate Change Adaptation through Urban Forestry: Planning for Resilient Indian Cities",
    authors: "Chaprana, M., & Mehta, R.",
    year: 2023,
    journal: "Landscape and Urban Planning",
    abstract: "This research examines how urban forestry can contribute to climate change adaptation in Indian cities, focusing on heat mitigation, flood risk reduction, and biodiversity conservation. Using data from TreeCity Explorer, we model the potential benefits of strategic tree planting scenarios in different urban contexts. The study provides evidence-based recommendations for species selection, spatial distribution, and planting densities to maximize climate resilience benefits while considering implementation constraints in high-density urban environments.",
    keywords: ["Climate adaptation", "Urban heat islands", "Flood mitigation", "Resilience planning", "Green infrastructure"],
    category: "climate"
  }
];

const ResearchPapers = () => {
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
            <FileText className="h-7 w-7 text-forest mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Research Papers</h1>
          </div>
          
          <p className="text-gray-700 mb-8 max-w-3xl">
            TreeCity Explorer data has been used in various academic and scientific research projects.
            Below is a collection of peer-reviewed papers that have utilized our urban forest data.
          </p>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6 flex flex-wrap">
              <TabsTrigger value="all">All Papers</TabsTrigger>
              <TabsTrigger value="air-quality">Air Quality</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
              <TabsTrigger value="biodiversity">Biodiversity</TabsTrigger>
              <TabsTrigger value="economics">Economics</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="climate">Climate</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              {papers.map(paper => (
                <PaperCard key={paper.id} paper={paper} />
              ))}
            </TabsContent>
            
            {["air-quality", "methodology", "biodiversity", "economics", "community", "climate"].map(category => (
              <TabsContent key={category} value={category} className="space-y-6">
                {papers.filter(paper => paper.category === category).map(paper => (
                  <PaperCard key={paper.id} paper={paper} />
                ))}
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Contribute to Research</h2>
            <p className="text-gray-700 mb-6">
              We're always looking to collaborate with researchers and institutions interested in urban forestry, 
              environmental science, and related fields. If you would like to use TreeCity Explorer data for 
              your research, or if you have published a paper using our data that is not listed here, please 
              get in touch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="default" asChild>
                <a href="mailto:mohit@liveupx.com?subject=Research%20Collaboration" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Contact for Research Collaboration</span>
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/methodology" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>View Our Methodology</span>
                </Link>
              </Button>
            </div>
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

const PaperCard = ({ paper }: { paper: typeof papers[0] }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {paper.title}
          </h3>
          <Button variant="ghost" size="icon" className="ml-2 flex-shrink-0">
            <Bookmark className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
        
        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4 gap-x-4 gap-y-2">
          <div className="flex items-center">
            <span className="font-medium mr-1">Authors:</span> {paper.authors}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-gray-400" />
            <span>{paper.year}</span>
          </div>
          <div>
            <span className="italic">{paper.journal}</span>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-800 mb-2">Abstract</h4>
          <p className="text-sm text-gray-700">{paper.abstract}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {paper.keywords.map(keyword => (
            <span key={keyword} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              {keyword}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
          <Button variant="outline" size="sm" asChild>
            <a href="#" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </a>
          </Button>
          <Button variant="default" size="sm" asChild>
            <a href="#" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              <span>View Full Paper</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResearchPapers;
