import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

const HackathonsSection = () => {
  const hackathons = [
    {
      title: "AI Innovation Challenge",
      date: "Dec 15-17, 2024",
      location: "San Francisco",
      participants: "2.5K",
      prize: "$50K",
      tags: ["AI", "Machine Learning", "Python"],
      description: "Build the next breakthrough in artificial intelligence and compete for amazing prizes.",
      status: "Registration Open"
    },
    {
      title: "FinTech Revolution",
      date: "Jan 20-22, 2025",
      location: "New York",
      participants: "1.8K",
      prize: "$30K",
      tags: ["Blockchain", "Finance", "React"],
      description: "Revolutionize financial services with cutting-edge technology solutions.",
      status: "Coming Soon"
    },
    {
      title: "Green Tech Hackathon",
      date: "Feb 10-12, 2025",
      location: "Berlin",
      participants: "3.2K",
      prize: "$40K",
      tags: ["Sustainability", "IoT", "Node.js"],
      description: "Create solutions for a sustainable future and help save our planet.",
      status: "Registration Open"
    }
  ];

  return (
    <section id="hackathons" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Upcoming Hackathons
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exciting opportunities to showcase your skills, learn new technologies, 
            and compete for amazing prizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <Card key={hackathon.title} className="bg-card border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-semibold text-foreground">{hackathon.title}</CardTitle>
                  <Badge variant={hackathon.status === "Registration Open" ? "default" : "secondary"}>
                    {hackathon.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">{hackathon.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {hackathon.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {hackathon.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {hackathon.participants} participants
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Trophy className="w-4 h-4" />
                    {hackathon.prize} prize pool
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {hackathon.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full bg-gradient-hero">
                  {hackathon.status === "Registration Open" ? "Register Now" : "Learn More"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Hackathons
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;