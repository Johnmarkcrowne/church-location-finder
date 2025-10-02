import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface LocationCardProps {
  name: string;
  address: string;
  city: string;
  serviceTimes: string[];
  image: string;
  mapsLink: string;
}

export const LocationCard = ({ name, address, city, serviceTimes, image, mapsLink }: LocationCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-[var(--card-shadow)] hover:shadow-[var(--hover-shadow)] transition-all duration-300">
      <div className="flex flex-row h-32">
        {/* Image - Left Side */}
        <div className="relative w-40 flex-shrink-0 overflow-hidden">
          <img 
            src={image} 
            alt={`${name} campus`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        </div>
        
        {/* Content - Right Side */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-foreground">{name}</h3>
            <div className="flex items-start gap-1.5 text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <p>{address}, {city}</p>
              </div>
            </div>
            <div className="flex items-start gap-1.5 text-muted-foreground">
              <Clock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              <p className="text-xs">{serviceTimes[0]}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              size="sm"
              variant="default" 
              className="flex-1 h-7 text-xs"
              onClick={() => window.open(mapsLink, '_blank')}
            >
              Directions
              <ArrowRight className="w-3 h-3" />
            </Button>
            <Button size="sm" variant="outline" className="h-7 text-xs">
              More
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
