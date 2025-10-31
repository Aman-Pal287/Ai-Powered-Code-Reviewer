import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CodeDemo from "@/components/CodeDemo";
import CTA from "@/components/CTA";
import Navbar from "@/components/Nabbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <CodeDemo />
      <CTA />
    </div>
  );
};

export default Index;
