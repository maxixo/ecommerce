import { useEffect, useState } from "react";
import { Card, CardContent } from "../../src/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";


const itemCategories = [
  {
    title: "Kitchen Essentials",
    items: [
      { name: "Plates", emoji: "🍽️" },
      { name: "Cups", emoji: "☕" },
      { name: "Utensils", emoji: "🍴" },
      { name: "Bowls", emoji: "🥣" },
    ],
  },
  {
    title: "Home Decor",
    items: [
      { name: "Vases", emoji: "🏺" },
      { name: "Frames", emoji: "🖼️" },
      { name: "Candles", emoji: "🕯️" },
      { name: "Plants", emoji: "🪴" },
    ],
  },
  {
    title: "Electronics",
    items: [
      { name: "Phones", emoji: "📱" },
      { name: "Tablets", emoji: "📱" },
      { name: "Cameras", emoji: "📷" },
      { name: "Headphones", emoji: "🎧" },
    ],
  },
  {
    title: "Personal Care",
    items: [
      { name: "Cosmetics", emoji: "💄" },
      { name: "Perfumes", emoji: "🧴" },
      { name: "Skincare", emoji: "🧴" },
      { name: "Brushes", emoji: "🪮" },
    ],
  },
];

const ItemsShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % itemCategories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % itemCategories.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + itemCategories.length) % itemCategories.length);
    setIsAutoPlaying(false);
  };

  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundColor: "var(--section-bg)",
        color: "var(--text-color)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ color: "var(--heading-color)" }}
          >
            Perfect for Every Household Item
          </h2>
          <p
            className="text-lg text-muted-foreground"
            style={{ color: "var(--subtext-color)" }}
          >
            Safe shipping solutions for all your belongings
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative mx-auto max-w-4xl">
          <div
            className="overflow-hidden rounded-xl p-8 md:p-12"
            style={{
              background: "linear-gradient(to bottom right, var(--gradient-start), var(--gradient-end))",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div className="mb-8 text-center">
              <h3
                className="text-2xl font-bold md:text-3xl"
                style={{ color: "var(--heading-color)" }}
              >
                {itemCategories[currentSlide].title}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {itemCategories[currentSlide].items.map((item, index) => (
                <Card
                  key={index}
                  className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    color: "var(--card-text)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="mb-3 text-5xl">{item.emoji}</div>
                    <p className="text-center font-medium">{item.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="h-10 w-10 rounded-full"
                style={{
                  backgroundColor: "var(--button-bg)",
                  color: "var(--button-text)",
                  border: "1px solid var(--button-border)",
                }}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {itemCategories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentSlide ? "w-8" : ""
                    }`}
                    style={{
                      backgroundColor:
                        index === currentSlide
                          ? "var(--indicator-active)"
                          : "var(--indicator-inactive)",
                    }}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="h-10 w-10 rounded-full"
                style={{
                  backgroundColor: "var(--button-bg)",
                  color: "var(--button-text)",
                  border: "1px solid var(--button-border)",
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsShowcase;
