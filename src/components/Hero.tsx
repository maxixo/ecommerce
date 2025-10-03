import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1600')] bg-cover bg-center opacity-10" />
      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Ship Smart, Ship Safe
          </h1>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Premium shipping supplies for every household need. Quality packaging delivered to your door.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Products
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Hero;
