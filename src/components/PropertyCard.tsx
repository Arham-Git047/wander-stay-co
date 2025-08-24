import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import { Property } from "@/data/mockProperties";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link to={`/property/${property.id}`} className="group block">
      <div className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
        <div className="relative">
          <img 
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-background/80 hover:bg-background text-gray-700 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              // Handle wishlist toggle
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-card-foreground truncate">
                {property.title}
              </h3>
              <p className="text-gray-500 text-sm">{property.type}</p>
              <p className="text-gray-500 text-sm">{property.location}</p>
            </div>
            <div className="flex items-center gap-1 ml-2">
              <Star className="h-4 w-4 fill-current text-yellow-400" />
              <span className="text-sm font-medium">{property.rating}</span>
              <span className="text-sm text-gray-500">({property.reviewCount})</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-border">
            <div className="text-sm text-gray-500">
              {property.guests} guests • {property.beds} beds • {property.baths} baths
            </div>
          </div>
          
          <div className="mt-2">
            <span className="text-lg font-semibold">${property.price}</span>
            <span className="text-gray-500"> night</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;