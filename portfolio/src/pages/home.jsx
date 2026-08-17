import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/AboutMe";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*theem toggle*/}
      <ThemeToggle />
      {/*background effects*/}
      <StarBackground />
      {/*navigation bar*/}
      <Navbar />

      {/*navigation bar*/}
     
      {/*main content*/}

      <main>
        <HeroSection/>
         <About/>
         <SkillsSection/>
         <ProjectsSection/>
         <ContactSection/>
      </main>
      {/*footer*/}
      <Footer/>

    </div>
  );
};
