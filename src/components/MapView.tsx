import { Button } from './ui/button';
import { Card } from './ui/card';
import { LocationPinIcon } from './ui/location-pin-icon';

interface Location {
  name: string;
  address: string;
  city: string;
  serviceTimes: string[];
  lat: number;
  lng: number;
  mapsLink: string;
}

interface MapViewProps {
  locations: Location[];
  selectedLocation?: Location | null;
}

const MapView = ({ locations, selectedLocation }: MapViewProps) => {
  // Use selected location if available, otherwise calculate center from all locations
  const centerLat = selectedLocation 
    ? selectedLocation.lat 
    : locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
  const centerLng = selectedLocation 
    ? selectedLocation.lng 
    : locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length;
  
  // Zoom level: closer when a specific location is selected
  const zoomLevel = selectedLocation ? 15 : 7;
  
  // Create markers parameter for Google Maps
  const markers = locations.map(loc => `markers=color:red%7Clabel:${loc.name.charAt(0)}%7C${loc.lat},${loc.lng}`).join('&');
  
  const mapUrl = `https://maps.google.com/maps?q=${centerLat},${centerLng}&z=${zoomLevel}&${markers}&output=embed`;

  return (
    <div className="relative h-full w-full">
      <iframe
        key={mapUrl}
        src={mapUrl}
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Church Locations Map"
      />
    </div>
  );
};

export default MapView;
