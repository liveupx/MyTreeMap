
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapBoxProps {
  city?: string;
}

const MapBox: React.FC<MapBoxProps> = ({ city = "Delhi" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // City coordinates
    const cityCoordinates: Record<string, [number, number]> = {
      "Delhi": [77.2090, 28.6139],
      "Mumbai": [72.8777, 19.0760],
      "Bangalore": [77.5946, 12.9716],
      "Chennai": [80.2707, 13.0827],
      "Kolkata": [88.3639, 22.5726],
      "Hyderabad": [78.4867, 17.3850],
      "Ahmedabad": [72.5714, 23.0225],
      "New Delhi": [77.2090, 28.6139]
    };

    // Get coordinates for selected city or default to Delhi
    const coordinates = cityCoordinates[city] || cityCoordinates["Delhi"];

    // Initialize map with the provided API key
    mapboxgl.accessToken = 'pk.eyJ1IjoibGl2ZXVweCIsImEiOiJjbThzbnU1aHowMXdiMmtzNnZrbnJ2bG93In0.dq6Z_8Cf7pj19tDqCWp9hQ';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12', // Changed to show more greenery
      center: coordinates, // Now coordinates are properly typed as [number, number]
      zoom: 11,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add tree markers when map loads
    map.current.on('load', () => {
      if (!map.current) return;
      
      // Generate 10-15 random points around the city center for tree locations
      const treeLocations = Array.from({ length: 11 }, (_, i) => ({
        lng: coordinates[0] + (Math.random() - 0.5) * 0.05,
        lat: coordinates[1] + (Math.random() - 0.5) * 0.05
      }));
      
      // Add a source of tree data
      map.current.addSource('trees', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: treeLocations.map(loc => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [loc.lng, loc.lat]
            },
            properties: {
              title: 'Tree',
              description: 'Urban tree'
            }
          }))
        }
      });
      
      // Add a tree layer with green circle markers
      map.current.addLayer({
        id: 'trees',
        type: 'circle',
        source: 'trees',
        paint: {
          'circle-radius': 8,
          'circle-color': '#2e8b57', // Forest green
          'circle-opacity': 0.8,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#1b4d33'
        }
      });
      
      // Add a 3D tree layer for better visualization
      map.current.addLayer({
        id: 'tree-labels',
        type: 'symbol',
        source: 'trees',
        layout: {
          'icon-image': 'park-15',
          'icon-size': 1.5,
          'icon-allow-overlap': true
        }
      });
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [city]); // Add city as a dependency to update when it changes

  return (
    <div className="map-container relative w-full h-[400px] mb-4">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default MapBox;
