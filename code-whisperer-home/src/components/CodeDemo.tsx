import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle } from "lucide-react";

const CodeDemo = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time code analysis with actionable insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/10 animate-slide-in">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="border-primary/30">
                Before Review
              </Badge>
            </div>
            <div className="bg-background/50 rounded-lg p-4 font-mono text-sm space-y-2">
              <div className="text-muted-foreground">// User authentication</div>
              <div><span className="text-secondary">function</span> login(user) {'{'}</div>
              <div className="pl-4">
                <span className="text-destructive">  if</span> (user.password == pwd) {'{'}
              </div>
              <div className="pl-8">    <span className="text-accent">return</span> true;</div>
              <div className="pl-4">  {'}'}</div>
              <div>{'}'}</div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <AlertCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span className="text-destructive">Security: Using == instead of ===</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <AlertCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span className="text-destructive">Best Practice: Missing input validation</span>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card animate-slide-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-gradient-accent border-0">
                After Review
              </Badge>
            </div>
            <div className="bg-background/50 rounded-lg p-4 font-mono text-sm space-y-2">
              <div className="text-muted-foreground">// User authentication</div>
              <div><span className="text-secondary">function</span> login(user, pwd) {'{'}</div>
              <div className="pl-4">
                <span className="text-destructive">  if</span> (!user || !pwd) <span className="text-accent">return</span> false;
              </div>
              <div className="pl-4">
                <span className="text-destructive">  if</span> (user.password === pwd) {'{'}
              </div>
              <div className="pl-8">    <span className="text-accent">return</span> true;</div>
              <div className="pl-4">  {'}'}</div>
              <div>{'}'}</div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-primary">Security improved with strict equality</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-primary">Added input validation</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
