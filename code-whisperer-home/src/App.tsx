import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 💤 Lazy-loaded Pages
const Index = lazy(() => import("./pages/Index"));
const CodeReview = lazy(() => import("./pages/CodeReview"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>

        {/* Suspense loader while routes load */}
        <Suspense
          fallback={
            <div className="w-full h-screen flex items-center justify-center bg-[#0f172a] text-white">
              <div className="text-lg animate-pulse text-cyan-400">
                Loading...
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/code-review" element={<CodeReview />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
