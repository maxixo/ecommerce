import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Gift } from "lucide-react";

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Collections</h2>
          <p className="text-lg text-muted-foreground">
            Explore our most popular product bundles
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="group overflow-hidden transition-all hover:shadow-xl">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-accent">
              <div className="absolute inset-0 flex items-center justify-center">
                <Package className="h-32 w-32 text-primary opacity-20" />
              </div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800')] bg-cover bg-center opacity-40" />
            </div>
            <CardContent className="p-8">
              <h3 className="mb-2 text-2xl font-bold">Business Essentials Pack</h3>
              <p className="mb-4 text-muted-foreground">
                Everything your business needs for professional shipping. Includes boxes, tape, labels, and protective materials.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$89.99</span>
                <Button>Shop Collection</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden transition-all hover:shadow-xl">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-secondary/20 to-accent">
              <div className="absolute inset-0 flex items-center justify-center">
                <Gift className="h-32 w-32 text-primary opacity-20" />
              </div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800')] bg-cover bg-center opacity-40" />
            </div>
            <CardContent className="p-8">
              <h3 className="mb-2 text-2xl font-bold">Home Shipper Bundle</h3>
              <p className="mb-4 text-muted-foreground">
                Perfect for occasional shippers and personal use. Quality materials at an affordable price.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$34.99</span>
                <Button>Shop Collection</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;