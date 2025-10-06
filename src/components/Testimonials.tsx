import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content:
      "ShipStore has transformed how I handle my e-commerce shipping. The quality is unmatched!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Online Seller",
    content:
      "Fast delivery and excellent packaging materials. My customers are always happy with their orders.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Etsy Shop Owner",
    content:
      "Best prices and quality I've found. The bulk bundles save me so much money!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by thousands of businesses and individuals
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white border border-gray-200 rounded-2xl"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center gap-1 text-blue-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-blue-500"
                    />
                  ))}
                </div>

                <p className="mb-4 text-gray-600 text-center">
                  {testimonial.content}
                </p>

                <div className="text-center">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
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
