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
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={`${name} campus`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <div className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm">{address}</p>
              <p className="text-sm">{city}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-semibold">Service Times</span>
          </div>
          <div className="pl-7 space-y-1">
            {serviceTimes.map((time, index) => (
              <p key={index} className="text-sm text-muted-foreground">{time}</p>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button 
            variant="default" 
            className="flex-1"
            onClick={() => window.open(mapsLink, '_blank')}
          >
            Get Directions
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );
};
