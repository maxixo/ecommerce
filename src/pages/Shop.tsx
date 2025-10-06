import { useCart } from "./../context/CartContext";
import type {Product } from "./../context/CartContext";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FeaturedProducts from "./../components/FeaturedProducts";
import CompanyMotto from "@/components/CompanyMotto";
import ItemsShowcase from "@/components/ItemsShowcase";
import { toast } from "sonner";
import Footer from "@/components/Footer";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products: Product[] = [
  {
    id: 1,
    name: "Standard Shipping Box",
    price: 4.99,
    image: product1,
    description: "Perfect for small to medium items",
  },
  {
    id: 2,
    name: "Padded Envelope",
    price: 2.99,
    image: product2,
    description: "Secure envelope for documents",
  },
  {
    id: 3,
    name: "Large Cardboard Box",
    price: 7.99,
    image: product3,
    description: "Heavy-duty box for larger shipments",
  },
  {
    id: 4,
    name: "Bubble Mailer",
    price: 3.49,
    image: product4,
    description: "Extra protection for fragile items",
  },
  {
    id: 5,
    name: "Box Bundle Pack",
    price: 29.99,
    image: product5,
    description: "Set of 10 assorted shipping boxes",
  },
  {
    id: 6,
    name: "Shipping Supplies Kit",
    price: 19.99,
    image: product6,
    description: "Complete kit with tape and labels",
  },
  {
    id: 7,
    name: "Medium Shipping Box",
    price: 5.99,
    image: product1,
    description: "Versatile box for everyday shipping",
  },
  {
    id: 8,
    name: "Premium Envelope",
    price: 3.99,
    image: product2,
    description: "High-quality envelope with padding",
  },
  {
    id: 9,
    name: "Extra Large Box",
    price: 9.99,
    image: product3,
    description: "Maximum capacity for bulk items",
  },
  {
    id: 10,
    name: "Poly Mailer",
    price: 2.49,
    image: product4,
    description: "Lightweight waterproof mailer",
  },
  {
    id: 11,
    name: "Starter Pack",
    price: 15.99,
    image: product5,
    description: "Essential supplies for new shippers",
  },
  {
    id: 12,
    name: "Deluxe Supplies Kit",
    price: 34.99,
    image: product6,
    description: "Premium kit with all accessories",
  },
  {
    id: 13,
    name: "Small Box Set",
    price: 12.99,
    image: product1,
    description: "Pack of 5 compact boxes",
  },
  {
    id: 14,
    name: "Document Mailer",
    price: 2.29,
    image: product2,
    description: "Professional document protection",
  },
  {
    id: 15,
    name: "Moving Box Bundle",
    price: 39.99,
    image: product3,
    description: "Complete moving box collection",
  },
  {
    id: 16,
    name: "Fragile Care Pack",
    price: 24.99,
    image: product4,
    description: "Specialized kit for delicate items",
  },
];

const Shop = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CompanyMotto />
      <ItemsShowcase />
      <FeaturedProducts />
      
      <main id="products" className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Products</h2>
          <p className="text-lg text-muted-foreground">
            Quality packaging materials for all your shipping needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Shop;
