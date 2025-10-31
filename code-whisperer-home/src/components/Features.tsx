import { Card } from "@/components/ui/card";
import { Shield, Zap, Target, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Security First",
    description: "Detect vulnerabilities and security issues before they reach production.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant feedback on your code without slowing down your workflow.",
  },
  {
    icon: Target,
    title: "Precise Analysis",
    description: "AI-driven insights that understand context and coding patterns.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share reviews, track improvements, and level up together.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Developers Love Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for modern development teams who demand excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1 animate-slide-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
