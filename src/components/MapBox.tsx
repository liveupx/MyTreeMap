
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with the provided API key
    mapboxgl.accessToken = 'pk.eyJ1IjoibGl2ZXVweCIsImEiOiJjbThzbnU1aHowMXdiMmtzNnZrbnJ2bG93In0.dq6Z_8Cf7pj19tDqCWp9hQ';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12', // Changed to show more greenery
      center: [77.2090, 28.6139], // Delhi coordinates
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
      
      // Add tree markers for visualization
      const treeLocations = [
        { lng: 77.2090, lat: 28.6139 },
        { lng: 77.2150, lat: 28.6180 },
        { lng: 77.2030, lat: 28.6100 },
        { lng: 77.2200, lat: 28.6050 },
        { lng: 77.1950, lat: 28.6200 },
        { lng: 77.2100, lat: 28.6250 },
        { lng: 77.2250, lat: 28.6150 },
        { lng: 77.2000, lat: 28.6000 },
        { lng: 77.2300, lat: 28.6220 },
        { lng: 77.1900, lat: 28.6050 },
        { lng: 77.2170, lat: 28.6120 },
      ];
      
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
  }, []);

  return (
    <div className="map-container relative w-full h-[400px] mb-4">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default MapBox;
