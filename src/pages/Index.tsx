import { MainLayout } from "@/components/MainLayout";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HackathonsSection from "@/components/HackathonsSection";
import TeamsSection from "@/components/TeamsSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <FeaturesSection />
        <HackathonsSection />
        <TeamsSection />
        <CommunitiesSection />
        <Footer />
      </div>
    </MainLayout>
  );
};

export default Index;
