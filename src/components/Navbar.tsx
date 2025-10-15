import { ShoppingCart, Package, User, LogOut, LayoutDashboard, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "././../../src/context/CartContext";
import { useAuth } from "./../../src/context/AuthContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


const Navbar = () => {
  const location = useLocation();
  const { items } = useCart();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;


  return (
  <nav
  className="sticky top-0 z-50 border-0 backdrop-blur supports-[backdrop-filter]:bg-card/60"
  style={{
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
  }}
>
  <div className="container mx-auto px-4">
    <div className="flex h-16 items-center justify-between">
      <Link
        to="/"
        className="flex items-center gap-2"
        style={{ color: "var(--primary)" }}
      >
        <Package className="h-6 w-6" style={{ color: "var(--primary)" }} />
        <span className="text-xl font-bold">ShipStore</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          to="/"
          className={`text-sm font-medium transition-colors hover:text-[var(--primary)] ${
            isActive("/") ? "text-[var(--primary)]" : "text-[var(--muted-foreground)]"
          }`}
        >
          Shop
        </Link>
        <a
          href="#products"
          className="text-sm font-medium transition-colors hover:text-[var(--primary)] text-[var(--muted-foreground)]"
        >
          Products
        </a>
        <Link to="/cart" className="relative">
          <Button
            variant={isActive("/cart") ? "default" : "ghost"}
            size="icon"
            className="relative"
            style={{
              backgroundColor: isActive("/cart")
                ? "var(--primary)"
                : "transparent",
              color: "var(--foreground)",
            }}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <span
                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                {cartItemsCount}
              </span>
            )}
          </Button>
        </Link>

        <ThemeToggle />

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--foreground)",
                }}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={user.user_metadata?.avatar_url}
                    alt={user.email || "User"}
                  />
                  <AvatarFallback>
                    {user.email?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">My Account</p>
                  <p className="text-xs leading-none text-[var(--muted-foreground)]">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard" className="cursor-pointer">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard" className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to="/login">
            <Button
              variant={isActive("/login") ? "default" : "outline"}
              size="sm"
              style={{
                backgroundColor: isActive("/login")
                  ? "var(--primary)"
                  : "transparent",
                color: "var(--foreground)",
                borderColor: "var(--primary)",
              }}
            >
              Login
            </Button>
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden items-center gap-2">
        <ThemeToggle />
        <Link to="/cart" className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            style={{
              backgroundColor: "transparent",
              color: "var(--foreground)",
            }}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <span
                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                {cartItemsCount}
              </span>
            )}
          </Button>
        </Link>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" style={{ color: "var(--foreground)" }}>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64"
            style={{
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
            }}
          >
            <div className="flex flex-col gap-4 mt-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-[var(--primary)] px-2 py-2 rounded-md ${
                  isActive("/")
                    ? "bg-[var(--accent)] text-[var(--primary)]"
                    : "text-[var(--muted-foreground)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <a
                href="#products"
                className="text-sm font-medium transition-colors hover:text-[var(--primary)] text-[var(--muted-foreground)] px-2 py-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>

              {user ? (
                <>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center gap-3 px-2 py-2 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={user.user_metadata?.avatar_url}
                          alt={user.email || "User"}
                        />
                        <AvatarFallback>
                          {user.email?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <p className="text-sm font-medium">My Account</p>
                        <p className="text-xs text-[var(--muted-foreground)]">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--primary)] px-2 py-2 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--primary)] px-2 py-2 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--primary)] px-2 py-2 rounded-md text-left"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    style={{
                      backgroundColor: "transparent",
                      color: "var(--foreground)",
                      borderColor: "var(--primary)",
                    }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </div>
</nav>


  );
};

export default Navbar;



