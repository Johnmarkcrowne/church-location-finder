import { MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

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
}

const MapView = ({ locations }: MapViewProps) => {
  // Calculate center point from all locations
  const centerLat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
  const centerLng = locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length;
  
  // Create markers parameter for Google Maps
  const markers = locations.map(loc => `markers=color:red%7Clabel:${loc.name.charAt(0)}%7C${loc.lat},${loc.lng}`).join('&');
  
  const mapUrl = `https://maps.google.com/maps?q=${centerLat},${centerLng}&z=10&${markers}&output=embed`;

  return (
    <div className="relative h-full w-full">
      <iframe
        src={mapUrl}
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Church Locations Map"
      />
      
      {/* Location Cards Overlay - Scrollable */}
      <div className="absolute top-4 left-4 max-h-[calc(100%-2rem)] overflow-y-auto space-y-2 max-w-xs hidden lg:block">
        {locations.map((location) => (
          <Card key={location.name} className="p-3 bg-background/95 backdrop-blur shadow-lg">
            <h3 className="font-bold text-sm mb-1">{location.name}</h3>
            <p className="text-xs text-muted-foreground mb-1">{location.address}</p>
            <p className="text-xs text-muted-foreground mb-2">{location.city}</p>
            <Button
              size="sm"
              variant="default"
              className="w-full text-xs h-7"
              onClick={() => window.open(location.mapsLink, '_blank')}
            >
              <MapPin className="mr-1 h-3 w-3" />
              Directions
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MapView;
