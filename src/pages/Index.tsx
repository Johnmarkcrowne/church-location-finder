import { LocationCard } from "@/components/LocationCard";
import { Button } from "@/components/ui/button";
import MapView from "@/components/MapView";
import location1 from "@/assets/location-1.jpg";
import location2 from "@/assets/location-2.jpg";
import location3 from "@/assets/location-3.jpg";
import location4 from "@/assets/location-4.jpg";
import location5 from "@/assets/location-5.jpg";
import location6 from "@/assets/location-6.jpg";

const locations = [
  {
    name: "Nairobi Main Campus",
    address: "Ngong Road",
    city: "Nairobi, Kenya",
    serviceTimes: [
      "Sunday: 9:00 AM, 11:00 AM, 5:00 PM",
      "Wednesday: 7:00 PM"
    ],
    image: location1,
    lat: -1.2921,
    lng: 36.8219,
    mapsLink: "https://maps.google.com/?q=Ngong+Road+Nairobi+Kenya"
  },
  {
    name: "Mombasa Campus",
    address: "Moi Avenue",
    city: "Mombasa, Kenya",
    serviceTimes: [
      "Sunday: 10:00 AM, 12:00 PM",
      "Thursday: 6:30 PM"
    ],
    image: location2,
    lat: -4.0435,
    lng: 39.6682,
    mapsLink: "https://maps.google.com/?q=Moi+Avenue+Mombasa+Kenya"
  },
  {
    name: "Kisumu Campus",
    address: "Oginga Odinga Street",
    city: "Kisumu, Kenya",
    serviceTimes: [
      "Sunday: 9:30 AM, 11:30 AM",
      "Wednesday: 7:00 PM"
    ],
    image: location3,
    lat: -0.0917,
    lng: 34.7680,
    mapsLink: "https://maps.google.com/?q=Kisumu+Kenya"
  },
  {
    name: "Dar es Salaam Campus",
    address: "Samora Avenue",
    city: "Dar es Salaam, Tanzania",
    serviceTimes: [
      "Sunday: 8:30 AM, 10:30 AM, 6:00 PM"
    ],
    image: location4,
    lat: -6.7924,
    lng: 39.2083,
    mapsLink: "https://maps.google.com/?q=Dar+es+Salaam+Tanzania"
  },
  {
    name: "Kigali Campus",
    address: "KN 3 Road",
    city: "Kigali, Rwanda",
    serviceTimes: [
      "Sunday: 9:00 AM, 11:00 AM",
      "Tuesday: 7:00 PM"
    ],
    image: location5,
    lat: -1.9403,
    lng: 29.8739,
    mapsLink: "https://maps.google.com/?q=Kigali+Rwanda"
  },
  {
    name: "Toronto Campus",
    address: "Yonge Street",
    city: "Toronto, Canada",
    serviceTimes: [
      "Sunday: 10:00 AM, 12:00 PM, 5:00 PM",
      "Wednesday: 6:30 PM"
    ],
    image: location6,
    lat: 43.6532,
    lng: -79.3832,
    mapsLink: "https://maps.google.com/?q=Toronto+Canada"
  },
  {
    name: "London Campus",
    address: "Oxford Street",
    city: "London, United Kingdom",
    serviceTimes: [
      "Sunday: 9:00 AM, 11:00 AM",
      "Friday: 7:00 PM"
    ],
    image: location1,
    lat: 51.5074,
    lng: -0.1278,
    mapsLink: "https://maps.google.com/?q=London+UK"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Find a Location Near You
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Join us for inspiring worship and meaningful community at one of our welcoming campuses across Kenya, East Africa, and around the world.
          </p>
        </div>
      </section>

      {/* Two Column Layout: Locations List + Map */}
      <section className="flex flex-col lg:flex-row h-[calc(100vh-200px)] min-h-[600px]">
        {/* Left Side - Locations List */}
        <div className="w-full lg:w-2/5 overflow-y-auto py-8 px-4 bg-background">
          <div className="max-w-xl mx-auto space-y-4">
            {locations.map((location) => (
              <LocationCard key={location.name} {...location} />
            ))}
          </div>
        </div>

        {/* Right Side - Interactive Map */}
        <div className="w-full lg:w-3/5 h-[400px] lg:h-auto sticky top-0">
          <MapView locations={locations} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Can't Find a Location Near You?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Watch our services online from anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default">
              Watch Online
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
