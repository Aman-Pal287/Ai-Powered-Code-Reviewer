import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Level Up Your Code?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of developers shipping better code with AI-powered reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 group">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
