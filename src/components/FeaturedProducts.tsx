import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Package, Gift } from "lucide-react";

const FeaturedProducts = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Collections
          </h2>
          <p className="text-lg text-gray-600">
            Explore our most popular product bundles
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Product 1 */}
          <Card className="group overflow-hidden transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl bg-white border border-gray-200 rounded-2xl">
            <div className="relative h-64 overflow-hidden">
              {/* Background gradient and image overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-blue-100/20 to-transparent" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Package className="h-32 w-32 text-blue-500 opacity-30 group-hover:scale-110 transform transition-transform duration-500" />
              </div>
            </div>

            {/* Card Content */}
            <CardContent className="p-8">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Business Essentials Pack
              </h3>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Everything your business needs for professional shipping. Includes boxes, tape, labels, and protective materials.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$89.99</span>
                <Button className="transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow-sm hover:shadow-md">
                  Shop Collection
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Product 2 */}
          <Card className="group overflow-hidden transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl bg-white border border-gray-200 rounded-2xl">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-pink-100/20 to-transparent" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Gift className="h-32 w-32 text-pink-500 opacity-30 group-hover:scale-110 transform transition-transform duration-500" />
              </div>
            </div>

            <CardContent className="p-8">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Home Shipper Bundle
              </h3>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Perfect for occasional shippers and personal use. Quality materials at an affordable price.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-pink-600">$34.99</span>
                <Button className="transition-all duration-300 bg-pink-600 hover:bg-pink-700 text-white font-medium px-5 py-2 rounded-lg shadow-sm hover:shadow-md">
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