import { ShoppingCart, Package } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "././../../src/context/CartContext";
import { useAuth } from "./../../src/context/AuthContext";


const Navbar = () => {
  const location = useLocation();
  const { items } = useCart();
  const { user, logout } = useAuth();

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* --- Logo --- */}
          <Link to="/" className="flex items-center gap-2">
            <Package className="h-6 w-6 text-blue-500" /> {/* Fixed logo color */}
            <span className="text-xl font-bold text-blue-500">ShipStore</span>
          </Link>

          {/* --- Nav Links --- */}
          <div className="flex items-center gap-8">
            {/* Shop Link */}
            <Link
              to="/"
              className={`relative text-sm font-medium transition-colors duration-300 ${
                isActive("/")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Shop
              {/* Active underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 transition-all duration-300 ${
                  isActive("/") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </Link>

            {/* Products Link */}
            <a
              href="#products"
              className="relative text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-blue-500"
            >
              Products
            </a>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button
                variant={isActive("/cart") ? "default" : "ghost"}
                size="icon"
                className={`relative transition-all duration-300 ${
                  isActive("/cart")
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "hover:bg-blue-100 hover:text-blue-600"
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Auth Buttons */}
            {user ? (
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button
                  variant={isActive("/login") ? "default" : "outline"}
                  size="sm"
                  className={`transition-all duration-300 ${
                    isActive("/login")
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;