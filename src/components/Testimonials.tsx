import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "ShipStore has transformed how I handle my e-commerce shipping. The quality is unmatched!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Online Seller",
    content: "Fast delivery and excellent packaging materials. My customers are always happy with their orders.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Etsy Shop Owner",
    content: "Best prices and quality I've found. The bulk bundles save me so much money!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by thousands of businesses and individuals
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
