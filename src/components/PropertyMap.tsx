'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import type { Property } from '@/data/properties';
import 'leaflet/dist/leaflet.css';

interface PropertyMapProps {
  properties: Property[];
  activePropertyId?: string | null;
  onSelectProperty?: (property: Property) => void;
  singlePropertyMode?: boolean;
  className?: string;
  showTileToggle?: boolean;
}

type MapTheme = 'streets' | 'satellite' | 'osm';

const TILE_LAYERS: Record<MapTheme, { url: string; attribution: string; maxZoom: number }> = {
  streets: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Sources: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
    maxZoom: 19,
  },
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 19,
  },
  osm: {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  },
};

export default function PropertyMap({
  properties,
  activePropertyId,
  onSelectProperty,
  singlePropertyMode = false,
  className = '',
  showTileToggle = true,
}: PropertyMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);
  const currentTileLayerRef = useRef<any>(null);
  const [mapTheme, setMapTheme] = useState<MapTheme>('streets');
  const [isMapReady, setIsMapReady] = useState(false);

  // Initialize Map
  useEffect(() => {
    let isMounted = true;

    async function initLeaflet() {
      if (!mapContainerRef.current) return;
      if (mapInstanceRef.current) return;

      const L = await import('leaflet');

      if (!isMounted || !mapContainerRef.current) return;

      // Default center: Patna, Bihar if available, else first property
      const defaultCenter: [number, number] = properties.length > 0 && properties[0].coordinates
        ? [properties[0].coordinates.lat, properties[0].coordinates.lng]
        : [25.5941, 85.1376];

      const initialZoom = singlePropertyMode ? 15 : 12;

      const map = L.map(mapContainerRef.current, {
        center: defaultCenter,
        zoom: initialZoom,
        zoomControl: false,
        attributionControl: false,
      });

      // Add Tile Layer
      const initialLayerConfig = TILE_LAYERS[mapTheme];
      const tileLayer = L.tileLayer(initialLayerConfig.url, {
        attribution: initialLayerConfig.attribution,
        maxZoom: initialLayerConfig.maxZoom,
        subdomains: 'abcd',
      }).addTo(map);

      currentTileLayerRef.current = tileLayer;

      // Group for markers
      const markersLayer = L.layerGroup().addTo(map);
      markersLayerRef.current = markersLayer;

      mapInstanceRef.current = map;
      setIsMapReady(true);

      // Force size invalidate after mounting
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 200);
    }

    initLeaflet();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markersLayerRef.current = null;
      }
    };
  }, []);

  // Handle Map Theme Change
  useEffect(() => {
    if (!mapInstanceRef.current || !currentTileLayerRef.current) return;

    import('leaflet').then((L) => {
      if (!mapInstanceRef.current) return;
      if (currentTileLayerRef.current) {
        mapInstanceRef.current.removeLayer(currentTileLayerRef.current);
      }

      const layerConfig = TILE_LAYERS[mapTheme];
      const newTileLayer = L.tileLayer(layerConfig.url, {
        attribution: layerConfig.attribution,
        maxZoom: layerConfig.maxZoom,
        subdomains: 'abcd',
      }).addTo(mapInstanceRef.current);

      currentTileLayerRef.current = newTileLayer;
    });
  }, [mapTheme]);

  // Update Markers when properties, activePropertyId or mapReady changes
  useEffect(() => {
    if (!isMapReady || !mapInstanceRef.current || !markersLayerRef.current) return;

    import('leaflet').then((L) => {
      const markersLayer = markersLayerRef.current;
      const map = mapInstanceRef.current;
      markersLayer.clearLayers();

      const validProperties = properties.filter(
        (p) => p.coordinates && typeof p.coordinates.lat === 'number' && typeof p.coordinates.lng === 'number'
      );

      if (validProperties.length === 0) return;

      const bounds = L.latLngBounds([]);

      validProperties.forEach((property) => {
        const isSelected = activePropertyId === property.id;
        const latLng: [number, number] = [property.coordinates.lat, property.coordinates.lng];
        bounds.extend(latLng);

        // Custom HTML Marker
        const markerHtml = `
          <div class="property-marker-wrapper group cursor-pointer transition-transform duration-200 ${
            isSelected ? 'scale-110 z-50' : 'hover:scale-105 z-20'
          }">
            <div class="flex flex-col items-center">
              <div class="px-2.5 py-1.5 rounded-full text-[11px] font-bold tracking-tight shadow-lg flex items-center gap-1.5 border transition-all ${
                isSelected
                  ? 'bg-secondary text-white border-white ring-4 ring-secondary/30 scale-105'
                  : 'bg-white text-primary border-slate-200 hover:bg-primary hover:text-white'
              }">
                <span class="material-symbols-outlined text-[13px] leading-none">
                  ${property.propertyType === 'Villa' ? 'villa' : 'apartment'}
                </span>
                <span class="font-montserrat">${property.priceDisplay}</span>
              </div>
              <div class="w-2 h-2 -mt-0.5 rotate-45 border-r border-b ${
                isSelected ? 'bg-secondary border-white' : 'bg-white border-slate-200'
              }"></div>
            </div>
          </div>
        `;

        const customIcon = L.divIcon({
          html: markerHtml,
          className: 'custom-property-div-icon',
          iconSize: [100, 36],
          iconAnchor: [50, 36],
        });

        const marker = L.marker(latLng, { icon: customIcon });

        marker.on('click', () => {
          if (onSelectProperty) {
            onSelectProperty(property);
          }
          map.flyTo(latLng, Math.max(map.getZoom(), 14), {
            duration: 0.6,
          });
        });

        marker.addTo(markersLayer);

        // If Single Property Mode, add neighborhood transit markers if available
        if (singlePropertyMode && property.neighborhoodInsights) {
          // Add radar pulse ring around property
          const pulseHtml = `
            <div class="relative flex items-center justify-center">
              <div class="absolute w-12 h-12 bg-secondary/20 rounded-full animate-ping"></div>
              <div class="w-4 h-4 bg-secondary border-2 border-white rounded-full shadow-md"></div>
            </div>
          `;
          const pulseIcon = L.divIcon({
            html: pulseHtml,
            className: 'property-pulse-icon',
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          });
          L.marker(latLng, { icon: pulseIcon }).addTo(markersLayer);
        }
      });

      // Fit map bounds appropriately
      if (!singlePropertyMode && validProperties.length > 1) {
        map.fitBounds(bounds, {
          padding: [50, 50],
          maxZoom: 14,
          animate: true,
        });
      } else if (validProperties.length === 1) {
        map.setView(
          [validProperties[0].coordinates.lat, validProperties[0].coordinates.lng],
          singlePropertyMode ? 15 : 14
        );
      }
    });
  }, [properties, isMapReady, singlePropertyMode, activePropertyId, onSelectProperty]);

  // Center on Active Property when it changes
  useEffect(() => {
    if (!isMapReady || !mapInstanceRef.current || !activePropertyId) return;

    const activeProp = properties.find((p) => p.id === activePropertyId);
    if (activeProp && activeProp.coordinates) {
      mapInstanceRef.current.flyTo(
        [activeProp.coordinates.lat, activeProp.coordinates.lng],
        Math.max(mapInstanceRef.current.getZoom(), 14),
        { duration: 0.8 }
      );
    }
  }, [activePropertyId, isMapReady, properties]);

  const handleZoomIn = useCallback(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  }, []);

  const handleRecenter = useCallback(() => {
    if (!mapInstanceRef.current) return;
    import('leaflet').then((L) => {
      const validProperties = properties.filter(
        (p) => p.coordinates && typeof p.coordinates.lat === 'number' && typeof p.coordinates.lng === 'number'
      );
      if (validProperties.length === 0) return;
      const bounds = L.latLngBounds(
        validProperties.map((p) => [p.coordinates.lat, p.coordinates.lng] as [number, number])
      );
      mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
    });
  }, [properties]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full z-0 bg-[#e5e9ec]" />

      {/* Floating Map Controls */}
      <div className="absolute top-4 right-4 z-[400] flex flex-col gap-2">
        {/* Zoom In */}
        <button
          onClick={handleZoomIn}
          className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-primary shadow-md border border-neutral-200/80 flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
          title="Zoom In"
          aria-label="Zoom In"
        >
          <span className="material-symbols-outlined text-lg">add</span>
        </button>

        {/* Zoom Out */}
        <button
          onClick={handleZoomOut}
          className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-primary shadow-md border border-neutral-200/80 flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
          title="Zoom Out"
          aria-label="Zoom Out"
        >
          <span className="material-symbols-outlined text-lg">remove</span>
        </button>

        {/* Recenter */}
        <button
          onClick={handleRecenter}
          className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-primary shadow-md border border-neutral-200/80 flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer mt-1"
          title="Recenter Map"
          aria-label="Recenter Map"
        >
          <span className="material-symbols-outlined text-lg">my_location</span>
        </button>
      </div>

      {/* Map Layer Switcher */}
      {showTileToggle && (
        <div className="absolute top-4 left-4 z-[400] flex items-center bg-white/95 backdrop-blur-md p-1 rounded-xl shadow-md border border-neutral-200/80 text-xs">
          <button
            onClick={() => setMapTheme('streets')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
              mapTheme === 'streets'
                ? 'bg-primary text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Street Map
          </button>
          <button
            onClick={() => setMapTheme('satellite')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
              mapTheme === 'satellite'
                ? 'bg-primary text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Satellite
          </button>
          <button
            onClick={() => setMapTheme('osm')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
              mapTheme === 'osm'
                ? 'bg-primary text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            OSM
          </button>
        </div>
      )}

      {/* Property Count Badge */}
      <div className="absolute bottom-4 left-4 z-[400] bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-neutral-200/80 shadow-md text-[11px] font-semibold text-neutral-700 flex items-center gap-1.5 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>{properties.length} Estates Indexed</span>
      </div>
    </div>
  );
}
