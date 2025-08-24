export interface Property {
  id: string;
  title: string;
  type: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    superhost: boolean;
  };
  beds: number;
  baths: number;
  guests: number;
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Stunning City Apartment with Skyline Views",
    type: "Entire apartment",
    location: "New York, NY",
    price: 220,
    rating: 4.9,
    reviewCount: 127,
    image: "/src/assets/hero-apartment.jpg",
    images: ["/src/assets/hero-apartment.jpg"],
    description: "Experience luxury living in this modern apartment featuring floor-to-ceiling windows with breathtaking city views. Perfect for business travelers or couples seeking a sophisticated urban retreat.",
    amenities: ["WiFi", "Kitchen", "Air conditioning", "Elevator", "City view", "Workspace"],
    host: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b799e1b9?w=150&h=150&fit=crop&crop=face",
      superhost: true
    },
    beds: 2,
    baths: 2,
    guests: 4
  },
  {
    id: "2", 
    title: "Cozy Mountain Cabin Retreat",
    type: "Entire cabin",
    location: "Aspen, CO",
    price: 185,
    rating: 4.8,
    reviewCount: 89,
    image: "/src/assets/property-cabin.jpg",
    images: ["/src/assets/property-cabin.jpg"],
    description: "Escape to this charming wooden cabin nestled among towering pines. Features a stone fireplace, rustic decor, and stunning mountain views. Perfect for hiking enthusiasts and nature lovers.",
    amenities: ["WiFi", "Kitchen", "Fireplace", "Mountain view", "Hiking nearby", "Pet friendly"],
    host: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      superhost: false
    },
    beds: 3,
    baths: 2,
    guests: 6
  },
  {
    id: "3",
    title: "Luxury Beachfront Villa",
    type: "Entire villa",
    location: "Malibu, CA", 
    price: 450,
    rating: 5.0,
    reviewCount: 203,
    image: "/src/assets/property-villa.jpg",
    images: ["/src/assets/property-villa.jpg"],
    description: "Indulge in paradise at this exclusive beachfront villa with private infinity pool and direct beach access. Modern amenities meet tropical luxury in this perfect vacation escape.",
    amenities: ["WiFi", "Pool", "Beach access", "Kitchen", "Air conditioning", "Ocean view", "Hot tub"],
    host: {
      name: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      superhost: true
    },
    beds: 4,
    baths: 3,
    guests: 8
  },
  {
    id: "4",
    title: "Charming Parisian Apartment",
    type: "Entire apartment",
    location: "Paris, France",
    price: 165,
    rating: 4.7,
    reviewCount: 156,
    image: "/src/assets/property-paris.jpg", 
    images: ["/src/assets/property-paris.jpg"],
    description: "Live like a local in this authentic Parisian apartment in the heart of the city. Classic Haussmann architecture with modern amenities, walking distance to major attractions.",
    amenities: ["WiFi", "Kitchen", "Elevator", "City center", "Historic building", "Metro nearby"],
    host: {
      name: "Pierre Dubois",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      superhost: true
    },
    beds: 1,
    baths: 1,
    guests: 2
  }
];