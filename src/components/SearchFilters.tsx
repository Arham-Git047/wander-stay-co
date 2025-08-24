import { Button } from "@/components/ui/button";

const filters = [
  "Amazing views",
  "Beachfront", 
  "Cabins",
  "Design",
  "Luxury",
  "Trending",
  "City",
  "Countryside",
  "Lakefront",
  "Ski-in/out"
];

const SearchFilters = () => {
  return (
    <div className="border-b border-border bg-background sticky top-[89px] z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant="ghost"
              className="flex-shrink-0 px-4 py-2 rounded-full border border-border hover:border-gray-900 transition-colors duration-200"
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;