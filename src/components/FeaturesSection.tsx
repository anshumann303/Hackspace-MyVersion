import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Trophy, MessageCircle, Search, Star } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Find Your Dream Team",
      description: "Connect with developers who complement your skills and share your passion for innovation."
    },
    {
      icon: Calendar,
      title: "Discover Hackathons",
      description: "Browse upcoming hackathons, filter by technology, and never miss an opportunity to compete."
    },
    {
      icon: Trophy,
      title: "Showcase Achievements",
      description: "Share your projects, wins, and learnings with the community to build your developer profile."
    },
    {
      icon: MessageCircle,
      title: "Join Communities",
      description: "Engage in tech discussions, get feedback on ideas, and stay updated with industry trends."
    },
    {
      icon: Search,
      title: "Smart Matching",
      description: "Our algorithm suggests teammates and hackathons based on your skills and interests."
    },
    {
      icon: Star,
      title: "Build Your Reputation",
      description: "Gain recognition for your contributions and become a trusted member of the developer community."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From team formation to project showcase, Hackspace provides all the tools 
            developers need to thrive in the hackathon ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="bg-gradient-card border-border shadow-soft hover:shadow-medium transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;