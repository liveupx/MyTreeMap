import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BookText, Download, Link2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const researchPapers = [
  {
    id: 1,
    title: "Assessing Air Pollution Tolerance of Plants for Greenbelt Development",
    authors: "M. Yunus, A. Ahmad, K.J. Ahmad",
    journal: "Water, Air, & Soil Pollution",
    year: 1985,
    abstract: "This paper evaluates the air pollution tolerance of several plant species for greenbelt development in urban areas.",
    url: "https://link.springer.com/article/10.1007/BF00476858"
  },
  {
    id: 2,
    title: "Mapping of Tree Cover Using Remote Sensing and GIS Techniques",
    authors: "S.K. Pathan, P.K. Joshi, A.S. Arya",
    journal: "Journal of the Indian Society of Remote Sensing",
    year: 2008,
    abstract: "This study uses remote sensing and GIS to map tree cover in an urban environment, providing a baseline for monitoring changes.",
    url: "https://link.springer.com/article/10.1007/BF02990713"
  },
  {
    id: 3,
    title: "Plant species diversity in urban landscapes of Tamil Nadu, India",
    authors: "G. Kumar, S. Parthasarathy, N. Parthasarathy",
    journal: "Urban Ecosystems",
    year: 2015,
    abstract: "This research examines the diversity of plant species in urban landscapes of Tamil Nadu, highlighting the importance of biodiversity conservation.",
    url: "https://link.springer.com/article/10.1007/s11252-014-0424-4"
  },
  {
    id: 4,
    title: "Assessing green space accessibility in urban areas",
    authors: "R. Bhatia",
    journal: "Landscape and Urban Planning",
    year: 2014,
    abstract: "This paper assesses the accessibility of green spaces in urban areas, focusing on spatial equity and environmental justice.",
    url: "https://www.sciencedirect.com/science/article/pii/S026130691400025X"
  }
];

const ResearchPapers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-soil to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-forest hover:text-forest-dark">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold mt-4 flex items-center">
            <BookText className="h-6 w-6 mr-2 text-forest" />
            Research Papers
          </h1>
          <p className="text-gray-600 mt-1">
            Explore the research that informs our understanding of urban forests
          </p>
        </div>

        <div className="space-y-6">
          {researchPapers.map(paper => (
            <Card key={paper.id} className="border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{paper.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Authors:</span> {paper.authors}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Journal:</span> {paper.journal}, {paper.year}
                </p>
                <Separator className="my-2" />
                <p className="text-gray-600 text-sm italic">{paper.abstract}</p>
              </CardContent>
              {paper.url && (
                <div className="p-4 flex justify-end">
                  <Button variant="outline" size="sm" asChild>
                    <a href={paper.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Link2 className="h-4 w-4" />
                      <span>View Publication</span>
                    </a>
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResearchPapers;
