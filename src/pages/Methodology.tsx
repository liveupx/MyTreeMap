
import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Trees, FileText, BarChart3, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Methodology = () => {
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
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="flex items-center mb-6">
            <FileText className="h-7 w-7 text-forest mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Methodology</h1>
          </div>
          
          <p className="text-gray-700 mb-6">
            TreeCity Explorer uses a comprehensive methodology to collect, analyze, and visualize urban forest data.
            Our approach combines various data sources, advanced technologies, and scientific methods to provide
            accurate and actionable information about trees in Indian cities.
          </p>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Data Collection</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-medium text-gray-800 mb-2">Satellite Imagery Analysis</h3>
                <p className="text-sm text-gray-600">
                  We utilize high-resolution satellite imagery and advanced computer vision algorithms to identify and count trees in urban areas.
                  This approach allows us to generate baseline data for tree cover assessments across entire cities.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-medium text-gray-800 mb-2">Government Data Integration</h3>
                <p className="text-sm text-gray-600">
                  We collaborate with municipal corporations and forest departments to integrate their tree census data
                  when available. This includes information about street trees, park trees, and protected forest areas within city limits.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-medium text-gray-800 mb-2">Community Reporting</h3>
                <p className="text-sm text-gray-600">
                  Citizens can contribute to our database by reporting new trees, tree removals, and providing 
                  additional information about existing trees. This crowdsourced data helps us maintain an up-to-date inventory.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-medium text-gray-800 mb-2">Field Surveys</h3>
                <p className="text-sm text-gray-600">
                  Our team conducts sample field surveys in select areas to validate and calibrate the data
                  collected through other methods. This helps ensure the accuracy of our tree counts and species identification.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Data Analysis</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-medium text-gray-800 mb-2">Tree Density Calculation</h3>
                <p className="text-sm text-gray-600">
                  We calculate tree density (trees per square kilometer) and trees per capita for each city.
                  These metrics allow for standardized comparisons between different urban areas.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-medium text-gray-800 mb-2">Environmental Benefits Modeling</h3>
                <p className="text-sm text-gray-600">
                  Using established scientific models, we estimate the environmental benefits provided by urban trees,
                  including carbon sequestration, air pollution removal, and stormwater interception.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-medium text-gray-800 mb-2">AQI Correlation Analysis</h3>
                <p className="text-sm text-gray-600">
                  We analyze the relationship between tree cover and air quality in different neighborhoods,
                  helping to identify priority areas for tree planting initiatives.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Challenges and Limitations</h2>
            <p className="text-gray-700 mb-4">
              While we strive for accuracy, there are some inherent challenges and limitations to our methodology:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Satellite imagery may have difficulty detecting young or small trees, especially in dense urban environments.</li>
              <li>Tree count updates vary by city based on available data sources and frequency of updates.</li>
              <li>Species identification is more accurate for street trees with government data than for trees identified solely through satellite imagery.</li>
              <li>Environmental benefit calculations are estimates based on scientific models and may not capture all local variables.</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Data Updates</h2>
            <p className="text-gray-700 mb-4">
              We update our tree data through the following schedule:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-3 font-medium">Data Type</th>
                    <th className="text-left py-2 px-3 font-medium">Update Frequency</th>
                    <th className="text-left py-2 px-3 font-medium">Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-3">Base Tree Count</td>
                    <td className="py-2 px-3">Annual</td>
                    <td className="py-2 px-3">Satellite Analysis</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-3">New Tree Plantings</td>
                    <td className="py-2 px-3">Monthly</td>
                    <td className="py-2 px-3">Government Data + Community Reports</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-3">Tree Removals</td>
                    <td className="py-2 px-3">Monthly</td>
                    <td className="py-2 px-3">Government Data + Community Reports</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-3">AQI Data</td>
                    <td className="py-2 px-3">Daily</td>
                    <td className="py-2 px-3">Central Pollution Control Board</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-3">Environmental Benefits</td>
                    <td className="py-2 px-3">Quarterly</td>
                    <td className="py-2 px-3">Calculated from Tree Data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-forest/5 rounded-lg">
            <div className="flex items-center mb-4 md:mb-0">
              <Database className="h-5 w-5 text-forest mr-2" />
              <p className="text-sm text-gray-700">
                Want to learn more about our data methodology?
              </p>
            </div>
            <Button asChild>
              <Link to="/research-papers">View Research Papers</Link>
            </Button>
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

export default Methodology;
