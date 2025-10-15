import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Package, Gift } from "lucide-react";

const FeaturedProducts = () => {
  return (
<section
  className="relative py-16 md:py-24 overflow-hidden"
  style={{
    background: "linear-gradient(to bottom, var(--background), var(--background-alt), var(--background))",
  }}
>
  {/* Decorative gradient background */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse at top, var(--accent-light) 40%, transparent 100%)",
    }}
  />

  <div className="container relative mx-auto px-4">
    {/* Header Section */}
    <div className="mb-12 text-center">
      <h2
        className="mb-4 text-3xl font-bold md:text-4xl"
        style={{ color: "var(--foreground)" }}
      >
        Featured Collections
      </h2>
      <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
        Explore our most popular product bundles
      </p>
    </div>

    {/* Product Grid */}
    <div className="grid gap-10 md:grid-cols-2">
      {/* Product 1 */}
      <Card
        className="group overflow-hidden transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl border"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <div className="relative h-64 overflow-hidden">
          {/* Background gradient and image overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom right, var(--primary-light) 40%, transparent)",
            }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800')",
            }}
          />

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Package
              className="h-32 w-32 opacity-30 group-hover:scale-110 transform transition-transform duration-500"
              style={{ color: "var(--primary)" }}
            />
          </div>
        </div>

        {/* Card Content */}
        <CardContent className="p-8">
          <h3
            className="mb-3 text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Business Essentials Pack
          </h3>
          <p
            className="mb-6 leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Everything your business needs for professional shipping. Includes
            boxes, tape, labels, and protective materials.
          </p>
          <div className="flex items-center justify-between">
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              $89.99
            </span>
            <Button
              className="transition-all duration-300 font-medium px-5 py-2 rounded-lg shadow-sm hover:shadow-md"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              Shop Collection
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Product 2 */}
      <Card
        className="group overflow-hidden transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl border"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <div className="relative h-64 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom right, var(--secondary-light) 40%, transparent)",
            }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800')",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Gift
              className="h-32 w-32 opacity-30 group-hover:scale-110 transform transition-transform duration-500"
              style={{ color: "var(--secondary)" }}
            />
          </div>
        </div>

        <CardContent className="p-8">
          <h3
            className="mb-3 text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Home Shipper Bundle
          </h3>
          <p
            className="mb-6 leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Perfect for occasional shippers and personal use. Quality materials
            at an affordable price.
          </p>
          <div className="flex items-center justify-between">
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--secondary)" }}
            >
              $34.99
            </span>
            <Button
              className="transition-all duration-300 font-medium px-5 py-2 rounded-lg shadow-sm hover:shadow-md"
              style={{
                backgroundColor: "var(--secondary)",
                color: "var(--secondary-foreground)",
              }}
            >
              Shop Collection
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

  );
};

export default FeaturedProducts;