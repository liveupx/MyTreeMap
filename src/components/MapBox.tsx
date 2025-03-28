
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
      style: 'mapbox://styles/mapbox/light-v11',
      center: [77.2090, 28.6139], // Delhi coordinates
      zoom: 11,
      pitch: 30,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="map-container relative w-full h-[400px] mb-4">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default MapBox;
