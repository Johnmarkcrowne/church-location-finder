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
    name: "Weighbridge Chapter",
    address: "Mombasa Road",
    city: "Nairobi, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM", "Wednesday: 7:00 PM"],
    image: location1,
    lat: -1.3167,
    lng: 36.8833,
    mapsLink: "https://maps.google.com/?q=Weighbridge+Nairobi+Kenya"
  },
  {
    name: "Baricho Chapter",
    address: "Baricho Road",
    city: "Kirinyaga, Kenya",
    serviceTimes: ["Sunday: 10:00 AM, 12:00 PM"],
    image: location2,
    lat: -0.6571,
    lng: 37.3808,
    mapsLink: "https://maps.google.com/?q=Baricho+Kirinyaga+Kenya"
  },
  {
    name: "Machakos Chapter",
    address: "Mombasa Road",
    city: "Machakos, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:30 AM", "Thursday: 6:30 PM"],
    image: location3,
    lat: -1.5177,
    lng: 37.2634,
    mapsLink: "https://maps.google.com/?q=Machakos+Kenya"
  },
  {
    name: "Ongata Rongai Chapter",
    address: "Magadi Road",
    city: "Ongata Rongai, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM", "Wednesday: 7:00 PM"],
    image: location4,
    lat: -1.3919,
    lng: 36.7514,
    mapsLink: "https://maps.google.com/?q=Ongata+Rongai+Kenya"
  },
  {
    name: "Nakuru Chapter",
    address: "Kenyatta Avenue",
    city: "Nakuru, Kenya",
    serviceTimes: ["Sunday: 9:30 AM, 11:30 AM", "Tuesday: 7:00 PM"],
    image: location5,
    lat: -0.3031,
    lng: 36.0800,
    mapsLink: "https://maps.google.com/?q=Nakuru+Kenya"
  },
  {
    name: "Wote Chapter",
    address: "Wote-Makindu Road",
    city: "Wote, Kenya",
    serviceTimes: ["Sunday: 10:00 AM, 12:00 PM"],
    image: location6,
    lat: -1.7808,
    lng: 37.6286,
    mapsLink: "https://maps.google.com/?q=Wote+Makueni+Kenya"
  },
  {
    name: "Eldoret Chapter",
    address: "Uganda Road",
    city: "Eldoret, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM, 5:00 PM", "Wednesday: 7:00 PM"],
    image: location1,
    lat: 0.5143,
    lng: 35.2698,
    mapsLink: "https://maps.google.com/?q=Eldoret+Kenya"
  },
  {
    name: "Westlands Chapter",
    address: "Waiyaki Way",
    city: "Nairobi, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM", "Thursday: 6:30 PM"],
    image: location2,
    lat: -1.2676,
    lng: 36.8070,
    mapsLink: "https://maps.google.com/?q=Westlands+Nairobi+Kenya"
  },
  {
    name: "Ngong Chapter",
    address: "Ngong Road",
    city: "Ngong, Kenya",
    serviceTimes: ["Sunday: 9:30 AM, 11:30 AM", "Wednesday: 7:00 PM"],
    image: location3,
    lat: -1.3524,
    lng: 36.6509,
    mapsLink: "https://maps.google.com/?q=Ngong+Kenya"
  },
  {
    name: "Thika Chapter",
    address: "Thika Road",
    city: "Thika, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM", "Tuesday: 7:00 PM"],
    image: location4,
    lat: -1.0332,
    lng: 37.0691,
    mapsLink: "https://maps.google.com/?q=Thika+Kenya"
  },
  {
    name: "Kitui Chapter",
    address: "Kitui-Mwingi Road",
    city: "Kitui, Kenya",
    serviceTimes: ["Sunday: 10:00 AM, 12:00 PM"],
    image: location5,
    lat: -1.3667,
    lng: 38.0167,
    mapsLink: "https://maps.google.com/?q=Kitui+Kenya"
  },
  {
    name: "Kitengela Chapter",
    address: "Namanga Road",
    city: "Kitengela, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM", "Wednesday: 7:00 PM"],
    image: location6,
    lat: -1.4530,
    lng: 36.9560,
    mapsLink: "https://maps.google.com/?q=Kitengela+Kenya"
  },
  {
    name: "Kasarani Chapter",
    address: "Thika Road",
    city: "Nairobi, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM, 5:00 PM", "Thursday: 6:30 PM"],
    image: location1,
    lat: -1.2255,
    lng: 36.8981,
    mapsLink: "https://maps.google.com/?q=Kasarani+Nairobi+Kenya"
  },
  {
    name: "Mombasa Chapter",
    address: "Moi Avenue",
    city: "Mombasa, Kenya",
    serviceTimes: ["Sunday: 10:00 AM, 12:00 PM", "Tuesday: 7:00 PM"],
    image: location2,
    lat: -4.0435,
    lng: 39.6682,
    mapsLink: "https://maps.google.com/?q=Mombasa+Kenya"
  },
  {
    name: "Buruburu Chapter",
    address: "Mumias Road",
    city: "Nairobi, Kenya",
    serviceTimes: ["Sunday: 9:30 AM, 11:30 AM", "Wednesday: 7:00 PM"],
    image: location3,
    lat: -1.2833,
    lng: 36.8833,
    mapsLink: "https://maps.google.com/?q=Buruburu+Nairobi+Kenya"
  },
  {
    name: "Nyeri Chapter",
    address: "Kimathi Way",
    city: "Nyeri, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM", "Thursday: 6:30 PM"],
    image: location4,
    lat: -0.4197,
    lng: 36.9475,
    mapsLink: "https://maps.google.com/?q=Nyeri+Kenya"
  },
  {
    name: "Utawala Chapter",
    address: "Eastern Bypass",
    city: "Nairobi, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM", "Wednesday: 7:00 PM"],
    image: location5,
    lat: -1.2845,
    lng: 36.9572,
    mapsLink: "https://maps.google.com/?q=Utawala+Nairobi+Kenya"
  },
  {
    name: "Kisumu Chapter",
    address: "Oginga Odinga Street",
    city: "Kisumu, Kenya",
    serviceTimes: ["Sunday: 9:30 AM, 11:30 AM", "Tuesday: 7:00 PM"],
    image: location6,
    lat: -0.0917,
    lng: 34.7680,
    mapsLink: "https://maps.google.com/?q=Kisumu+Kenya"
  },
  {
    name: "Embu Chapter",
    address: "Kenyatta Highway",
    city: "Embu, Kenya",
    serviceTimes: ["Sunday: 10:00 AM, 12:00 PM"],
    image: location1,
    lat: -0.5310,
    lng: 37.4572,
    mapsLink: "https://maps.google.com/?q=Embu+Kenya"
  },
  {
    name: "Embakasi Chapter",
    address: "Mombasa Road",
    city: "Nairobi, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM", "Wednesday: 7:00 PM"],
    image: location2,
    lat: -1.3197,
    lng: 36.8925,
    mapsLink: "https://maps.google.com/?q=Embakasi+Nairobi+Kenya"
  },
  {
    name: "Kericho Chapter",
    address: "Moi Highway",
    city: "Kericho, Kenya",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM", "Thursday: 6:30 PM"],
    image: location3,
    lat: -0.3676,
    lng: 35.2836,
    mapsLink: "https://maps.google.com/?q=Kericho+Kenya"
  },
  {
    name: "Lavington Chapter",
    address: "James Gichuru Road",
    city: "Nairobi, Kenya",
    serviceTimes: ["Sunday: 9:30 AM, 11:30 AM", "Wednesday: 7:00 PM"],
    image: location4,
    lat: -1.2833,
    lng: 36.7667,
    mapsLink: "https://maps.google.com/?q=Lavington+Nairobi+Kenya"
  },
  {
    name: "Dar es Salaam Chapter",
    address: "Samora Avenue",
    city: "Dar es Salaam, Tanzania",
    serviceTimes: ["Sunday: 8:30 AM, 10:30 AM", "Tuesday: 7:00 PM"],
    image: location5,
    lat: -6.7924,
    lng: 39.2083,
    mapsLink: "https://maps.google.com/?q=Dar+es+Salaam+Tanzania"
  },
  {
    name: "Kigali Chapter",
    address: "KN 3 Road",
    city: "Kigali, Rwanda",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM", "Wednesday: 7:00 PM"],
    image: location6,
    lat: -1.9403,
    lng: 29.8739,
    mapsLink: "https://maps.google.com/?q=Kigali+Rwanda"
  },
  {
    name: "Toronto Chapter",
    address: "Yonge Street",
    city: "Toronto, Canada",
    serviceTimes: ["Sunday: 10:00 AM, 12:00 PM", "Thursday: 6:30 PM"],
    image: location1,
    lat: 43.6532,
    lng: -79.3832,
    mapsLink: "https://maps.google.com/?q=Toronto+Canada"
  },
  {
    name: "London Chapter",
    address: "Oxford Street",
    city: "London, United Kingdom",
    serviceTimes: ["Sunday: 9:00 AM, 11:00 AM", "Friday: 7:00 PM"],
    image: location2,
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
