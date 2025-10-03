import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "./../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { CartProvider } from "../src/context/CartContext";

import { AuthProvider } from "./../src/context/AuthContext";
import Shop from "../src/pages/Shop";
import Cart from "../src/pages/Cart";
import Login from"../src/pages/Login";
import Signup from "../src/pages/Signup";
import NotFound from "../src/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup />} /> 
              ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
              <Route path="*" element={<NotFound />} /> 
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;