import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, TrendingUp } from "lucide-react";

const CommunitiesSection = () => {
  const communities = [
    {
      name: "React Developers",
      description: "Share React tips, discuss best practices, and showcase your latest projects.",
      members: "25.3K",
      posts: "156",
      growth: "+12%",
      tags: ["React", "JavaScript", "Frontend"],
      activity: "Very Active",
      featured: true
    },
    {
      name: "AI & Machine Learning",
      description: "Explore the latest in AI, share research, and collaborate on ML projects.",
      members: "18.7K",
      posts: "89",
      growth: "+18%",
      tags: ["AI", "Python", "TensorFlow"],
      activity: "Very Active",
      featured: true
    },
    {
      name: "Blockchain Builders",
      description: "Discuss blockchain technology, DeFi projects, and smart contract development.",
      members: "12.1K",
      posts: "67",
      growth: "+8%",
      tags: ["Blockchain", "Solidity", "Web3"],
      activity: "Active",
      featured: false
    },
    {
      name: "Mobile Development",
      description: "iOS, Android, and cross-platform mobile development discussions.",
      members: "22.8K",
      posts: "134",
      growth: "+15%",
      tags: ["Mobile", "Flutter", "React Native"],
      activity: "Very Active",
      featured: false
    },
    {
      name: "DevOps & Cloud",
      description: "Infrastructure, deployment strategies, and cloud architecture discussions.",
      members: "16.4K",
      posts: "92",
      growth: "+10%",
      tags: ["DevOps", "AWS", "Docker"],
      activity: "Active",
      featured: false
    },
    {
      name: "Startup Founders",
      description: "Connect with fellow entrepreneurs, share startup experiences and insights.",
      members: "8.9K",
      posts: "45",
      growth: "+22%",
      tags: ["Startup", "Business", "Funding"],
      activity: "Active",
      featured: true
    }
  ];

  return (
    <section id="communities" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Join Tech Communities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with developers who share your interests, learn from experts, 
            and stay updated with the latest trends in technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <Card key={community.name} className={`border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in ${community.featured ? 'bg-gradient-card ring-2 ring-brand-secondary/20' : 'bg-card'}`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold text-foreground">{community.name}</CardTitle>
                  {community.featured && (
                    <Badge className="bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">{community.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-foreground">{community.members}</div>
                    <div className="text-xs text-muted-foreground">Members</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground">{community.posts}</div>
                    <div className="text-xs text-muted-foreground">Posts/week</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-brand-accent flex items-center justify-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {community.growth}
                    </div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {community.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${community.activity === 'Very Active' ? 'bg-brand-accent' : 'bg-yellow-500'}`}></div>
                    <span className="text-xs text-muted-foreground">{community.activity}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MessageCircle className="w-3 h-3" />
                    <span>Discussion ongoing</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-hero">
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Explore All Communities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitiesSection;