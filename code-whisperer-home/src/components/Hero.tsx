import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate()


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Powered by Advanced AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-accent bg-clip-text text-transparent">AI-Powered</span>
            <br />
            Code Reviews
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Enhance code quality, catch bugs early, and ship with confidence.
            Get intelligent feedback on every commit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button onClick={() => {
              navigate("/code-review")
            }} size="lg" className="bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 group">
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              View Demo
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>Trusted by 10,000+ developers worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
