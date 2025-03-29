import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Trees, Code, Database, Lock, AlertCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ApiDocs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-soil to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <Code className="h-7 w-7 text-forest mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">API Documentation</h1>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <p className="text-gray-700 mb-6">
                The MyTreeMaps API allows developers to access our urban forest data programmatically.
                You can integrate tree statistics, air quality information, and more into your applications
                using our RESTful API endpoints.
              </p>
              
              <div className="flex items-center bg-amber-50 p-4 rounded-lg mb-6">
                <AlertCircle className="h-5 w-5 text-amber-700 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-amber-700">
                    <strong>API Access:</strong> The API is currently in beta. To request access, please contact 
                    <a href="mailto:mohit@liveupx.com" className="underline ml-1">mohit@liveupx.com</a>
                  </p>
                </div>
              </div>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Authentication</h2>
                    <p className="text-gray-700 mb-4">
                      All API requests require an API key for authentication. Include your API key in the request
                      header as follows:
                    </p>
                    
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto mb-4">
                      <pre>{`Authorization: Bearer YOUR_API_KEY`}</pre>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Lock className="h-5 w-5 text-gray-700" />
                      <p className="text-sm text-gray-700">
                        To request an API key, please contact us at <a href="mailto:mohit@liveupx.com" className="underline">mohit@liveupx.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Base URL</h2>
                    <p className="text-gray-700 mb-4">
                      All API endpoints are relative to:
                    </p>
                    
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
                      <pre>{`https://api.mytreemap.pages.dev/v1`}</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Rate Limits</h2>
                    <p className="text-gray-700 mb-4">
                      The API has the following rate limits:
                    </p>
                    
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Free tier: 100 requests per day</li>
                      <li>Standard tier: 1,000 requests per day</li>
                      <li>Premium tier: 10,000 requests per day</li>
                    </ul>
                    
                    <p className="text-sm text-gray-600 mt-4">
                      Rate limit information is included in the response headers:
                    </p>
                    
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto mt-2">
                      <pre>{`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1619885115`}</pre>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="endpoints" className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Available Endpoints</h2>
                    
                    <div className="space-y-4">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 border-b">
                          <div className="flex items-center">
                            <span className="bg-green-500 text-white px-2 py-1 text-xs rounded font-medium mr-3">GET</span>
                            <code className="font-mono text-sm">/cities</code>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-700 mb-3">
                            Returns a list of all cities available in the TreeCity Explorer database.
                          </p>
                          <h4 className="text-sm font-medium text-gray-800 mb-2">Response Format:</h4>
                          <div className="bg-gray-900 text-gray-100 p-3 rounded-md font-mono text-xs overflow-x-auto">
                            <pre>{`{
  "cities": [
    {
      "id": "delhi",
      "name": "Delhi",
      "state": "Delhi",
      "population": 19800000,
      "area": 1484,
      "treeCount": 2376492,
      "treeCoverPercentage": 19.8
    },
    // ... other cities
  ]
}`}</pre>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 border-b">
                          <div className="flex items-center">
                            <span className="bg-green-500 text-white px-2 py-1 text-xs rounded font-medium mr-3">GET</span>
                            <code className="font-mono text-sm">/cities/{`{cityId}`}</code>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-700 mb-3">
                            Returns detailed information about a specific city.
                          </p>
                          <h4 className="text-sm font-medium text-gray-800 mb-2">Path Parameters:</h4>
                          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 mb-3">
                            <li><code className="bg-gray-100 px-1 rounded">cityId</code>: The ID of the city (e.g., "delhi", "mumbai")</li>
                          </ul>
                          <h4 className="text-sm font-medium text-gray-800 mb-2">Response Format:</h4>
                          <div className="bg-gray-900 text-gray-100 p-3 rounded-md font-mono text-xs overflow-x-auto">
                            <pre>{`{
  "id": "delhi",
  "name": "Delhi",
  "state": "Delhi",
  "population": 19800000,
  "area": 1484,
  "coordinates": {
    "latitude": 28.6139,
    "longitude": 77.2090
  },
  "treeData": {
    "totalCount": 2376492,
    "treesPerPerson": 0.12,
    "treeCoverPercentage": 19.8,
    "co2AbsorbedYearly": 47500,
    "dominantSpecies": [
      {
        "name": "Neem",
        "count": 324567,
        "percentage": 13.7
      },
      // ... other species
    ]
  },
  "airQuality": {
    "current": {
      "aqi": 285,
      "status": "Unhealthy",
      "timestamp": "2023-10-15T12:30:00Z"
    },
    "forecast": {
      // ... forecast data
    }
  }
}`}</pre>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 border-b">
                          <div className="flex items-center">
                            <span className="bg-green-500 text-white px-2 py-1 text-xs rounded font-medium mr-3">GET</span>
                            <code className="font-mono text-sm">/cities/{`{cityId}`}/trees</code>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-700 mb-3">
                            Returns tree data for a specific city with pagination.
                          </p>
                          <h4 className="text-sm font-medium text-gray-800 mb-2">Path Parameters:</h4>
                          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 mb-3">
                            <li><code className="bg-gray-100 px-1 rounded">cityId</code>: The ID of the city</li>
                          </ul>
                          <h4 className="text-sm font-medium text-gray-800 mb-2">Query Parameters:</h4>
                          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 mb-3">
                            <li><code className="bg-gray-100 px-1 rounded">page</code>: Page number (default: 1)</li>
                            <li><code className="bg-gray-100 px-1 rounded">limit</code>: Items per page (default: 100, max: 500)</li>
                            <li><code className="bg-gray-100 px-1 rounded">species</code>: Filter by tree species</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 border-b">
                          <div className="flex items-center">
                            <span className="bg-green-500 text-white px-2 py-1 text-xs rounded font-medium mr-3">GET</span>
                            <code className="font-mono text-sm">/cities/{`{cityId}`}/aqi</code>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-700 mb-3">
                            Returns current and historical AQI data for a specific city.
                          </p>
                          <h4 className="text-sm font-medium text-gray-800 mb-2">Query Parameters:</h4>
                          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 mb-3">
                            <li><code className="bg-gray-100 px-1 rounded">from</code>: Start date for historical data (YYYY-MM-DD)</li>
                            <li><code className="bg-gray-100 px-1 rounded">to</code>: End date for historical data (YYYY-MM-DD)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="examples" className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Code Examples</h2>
                    
                    <Tabs defaultValue="javascript">
                      <TabsList className="mb-4">
                        <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="curl">cURL</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="javascript" className="space-y-4">
                        <div>
                          <h3 className="text-md font-medium text-gray-800 mb-2">Fetch City Data</h3>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
                            <pre>{`const fetchCityData = async (cityId) => {
  const apiKey = 'YOUR_API_KEY';
  const response = await fetch(
    \`https://api.mytreemap.pages.dev/v1/cities/\${cityId}\`,
    {
      headers: {
        'Authorization': \`Bearer \${apiKey}\`
      }
    }
  );
  
  if (!response.ok) {
    throw new Error(\`API Error: \${response.status}\`);
  }
  
  return await response.json();
};

// Example usage
fetchCityData('delhi')
  .then(data => console.log(data))
  .catch(error => console.error(error));`}</pre>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="python" className="space-y-4">
                        <div>
                          <h3 className="text-md font-medium text-gray-800 mb-2">Fetch City Data</h3>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
                            <pre>{`import requests

def fetch_city_data(city_id):
    api_key = 'YOUR_API_KEY'
    url = f'https://api.mytreemap.pages.dev/v1/cities/{city_id}'
    
    headers = {
        'Authorization': f'Bearer {api_key}'
    }
    
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Raise exception for 4XX/5XX responses
    
    return response.json()

# Example usage
try:
    data = fetch_city_data('delhi')
    print(data)
except requests.exceptions.RequestException as e:
    print(f"Error: {e}")`}</pre>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="curl" className="space-y-4">
                        <div>
                          <h3 className="text-md font-medium text-gray-800 mb-2">Fetch City Data</h3>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
                            <pre>{`curl -X GET \\
  https://api.mytreemap.pages.dev/v1/cities/delhi \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</pre>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <Database className="h-5 w-5 mr-2 text-forest" />
                API Use Cases
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-forest/10 rounded-full p-1 mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-forest rounded-full"></div>
                  </div>
                  <p className="text-sm">Environmental dashboards and monitoring applications</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-forest/10 rounded-full p-1 mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-forest rounded-full"></div>
                  </div>
                  <p className="text-sm">Urban planning and policy research tools</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-forest/10 rounded-full p-1 mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-forest rounded-full"></div>
                  </div>
                  <p className="text-sm">Educational applications about urban ecology</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-forest/10 rounded-full p-1 mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-forest rounded-full"></div>
                  </div>
                  <p className="text-sm">Tree planting campaign measurement and reporting</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Have Questions?</h3>
              <p className="text-gray-700 text-sm mb-4">
                If you have any questions about our API or need technical assistance, please don't hesitate to contact us.
              </p>
              <div className="space-y-3">
                <Button variant="outline" asChild className="w-full">
                  <a href="mailto:mohit@liveupx.com?subject=API%20Documentation%20Question" className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Email Technical Support</span>
                  </a>
                </Button>
                <Button variant="default" asChild className="w-full">
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>Contact Us</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocs;
