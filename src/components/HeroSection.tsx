import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">{/* Removed top padding since navbar is no longer fixed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Build Amazing Teams,
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Win Hackathons</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Connect with like-minded developers, discover exciting hackathons, 
                and showcase your projects to the world. Your next breakthrough starts here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero group">
                Start Building
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Hackathons
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Hackathons</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Communities</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-large bg-gradient-card p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">💻</div>
                <div className="text-lg text-muted-foreground">Developers Collaborating</div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-medium animate-float">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-secondary" />
                  <span className="text-sm font-medium">Team Formed</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-medium animate-float" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-brand-accent" />
                  <span className="text-sm font-medium">Project Submitted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;