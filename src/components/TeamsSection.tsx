import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MessageCircle, Star } from "lucide-react";

const TeamsSection = () => {
  const teams = [
    {
      name: "AI Innovators",
      description: "Looking for a backend developer to join our AI-powered health monitoring app for the upcoming hackathon.",
      members: [
        { name: "Sarah Chen", role: "UI/UX Designer", avatar: "", initials: "SC" },
        { name: "Mike Johnson", role: "Frontend Dev", avatar: "", initials: "MJ" },
        { name: "Alex Kim", role: "Data Scientist", avatar: "", initials: "AK" }
      ],
      needed: ["Backend Developer", "DevOps Engineer"],
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      hackathon: "AI Innovation Challenge",
      rating: 4.8,
      projects: 12
    },
    {
      name: "FinTech Builders",
      description: "Experienced team working on blockchain-based payment solutions. Need a smart contract developer.",
      members: [
        { name: "David Park", role: "Full Stack Dev", avatar: "", initials: "DP" },
        { name: "Emma Wilson", role: "Product Manager", avatar: "", initials: "EW" }
      ],
      needed: ["Blockchain Developer", "Security Expert"],
      technologies: ["Solidity", "Web3", "Next.js", "MongoDB"],
      hackathon: "FinTech Revolution",
      rating: 4.9,
      projects: 8
    },
    {
      name: "Green Tech Squad",
      description: "Passionate about sustainability and IoT. Building an energy monitoring system for smart homes.",
      members: [
        { name: "Lisa Zhang", role: "IoT Engineer", avatar: "", initials: "LZ" },
        { name: "Tom Brown", role: "Mobile Dev", avatar: "", initials: "TB" },
        { name: "Nina Patel", role: "Hardware Engineer", avatar: "", initials: "NP" }
      ],
      needed: ["Cloud Architect"],
      technologies: ["IoT", "Flutter", "Firebase", "Arduino"],
      hackathon: "Green Tech Hackathon",
      rating: 4.7,
      projects: 15
    }
  ];

  return (
    <section id="teams" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Find Your Perfect Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join experienced teams or start your own. Connect with developers who 
            share your vision and complement your skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <Card key={team.name} className="bg-gradient-card border-border shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-semibold text-foreground">{team.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{team.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{team.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Current Members</h4>
                    <div className="flex -space-x-2">
                      {team.members.map((member) => (
                        <Avatar key={member.name} className="border-2 border-background">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted border-2 border-background">
                        <Users className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Looking for</h4>
                    <div className="flex flex-wrap gap-1">
                      {team.needed.map((role) => (
                        <Badge key={role} className="bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {team.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Target: {team.hackathon}</span>
                    <span>{team.projects} projects completed</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-hero">
                    Join Team
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Browse All Teams
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;