import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Heart, Share, Wifi, Car, Waves, Coffee } from "lucide-react";
import { mockProperties } from "@/data/mockProperties";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = mockProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Property not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const amenityIcons: { [key: string]: any } = {
    "WiFi": Wifi,
    "Pool": Waves,
    "Kitchen": Coffee,
    "Air conditioning": Car,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Share className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-current text-yellow-400" />
            <span className="font-medium">{property.rating}</span>
            <span className="text-gray-500">({property.reviewCount} reviews)</span>
          </div>
          <span className="text-gray-500">{property.location}</span>
        </div>

        {/* Property Image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img 
            src={property.image}
            alt={property.title}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {property.type} hosted by {property.host.name}
                  </h2>
                  <p className="text-gray-500">
                    {property.guests} guests • {property.beds} bedrooms • {property.baths} bathrooms
                  </p>
                </div>
                <img 
                  src={property.host.avatar}
                  alt={property.host.name}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              
              {property.host.superhost && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-coral-light text-coral-dark text-sm font-medium mb-4">
                  Superhost
                </div>
              )}
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">About this place</h3>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity) => {
                  const IconComponent = amenityIcons[amenity] || Wifi;
                  return (
                    <div key={amenity} className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-gray-600" />
                      <span>{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-elegant">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">${property.price}</span>
                    <span className="text-gray-500">night</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span className="text-sm">{property.rating} ({property.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-border rounded-lg p-3">
                      <label className="text-xs font-medium text-gray-500 uppercase">Check-in</label>
                      <div className="text-sm">Add date</div>
                    </div>
                    <div className="border border-border rounded-lg p-3">
                      <label className="text-xs font-medium text-gray-500 uppercase">Checkout</label>
                      <div className="text-sm">Add date</div>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-3">
                    <label className="text-xs font-medium text-gray-500 uppercase">Guests</label>
                    <div className="text-sm">1 guest</div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                    Reserve
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    You won't be charged yet
                  </p>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span>${property.price} x 5 nights</span>
                      <span>${property.price * 5}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning fee</span>
                      <span>$50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>$83</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${property.price * 5 + 50 + 83}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;