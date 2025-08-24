import Header from "@/components/Header";
import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";
import { mockProperties } from "@/data/mockProperties";
import heroImage from "@/assets/hero-apartment.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Find your next stay</h1>
            <p className="text-xl mb-8">Discover amazing places to stay around the world</p>
            <div className="bg-white rounded-full p-2 max-w-2xl mx-auto shadow-elegant">
              <div className="flex items-center">
                <input 
                  type="text" 
                  placeholder="Search destinations" 
                  className="flex-1 px-6 py-4 text-gray-900 rounded-l-full focus:outline-none"
                />
                <button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-full font-medium transition-colors duration-200">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SearchFilters />
      
      {/* Properties Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
