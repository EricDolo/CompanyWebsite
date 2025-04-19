import { ArrowRight, Code, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check initial scroll position on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 flex flex-col justify-center bg-gradient-to-br from-white via-white to-blue-50"
    >
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="block">Code Your Future.</span>
              <span className="gradient-text">Amplify Your Events.</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              One-stop solution for innovative software development and dynamic entertainment services. Bringing your digital ideas and events to life.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="gradient-bg gap-2 text-lg px-6 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started <ArrowRight size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="gap-2 text-lg px-6 py-6"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <ServiceCard 
                icon={<Code className="h-8 w-8 text-dolo-blue" />}
                title="Software Development"
                description="Custom web & mobile applications, websites, and digital solutions."
                delay="0s"
                className="bg-white shadow-lg hover:shadow-xl"
              />
              <ServiceCard 
                icon={<Music className="h-8 w-8 text-dolo-purple" />}
                title="Entertainment Services"
                description="Professional DJ, sound equipment rentals, and digital marketing."
                delay="0.2s"
                className="bg-white shadow-lg hover:shadow-xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-dolo-blue/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-0 right-0 w-40 h-40 bg-dolo-purple/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - only show if user is at top */}
        {!hasScrolled && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce transition-opacity duration-500">
            <span className="text-sm font-medium text-gray-500">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-2 h-2 bg-dolo-blue rounded-full mt-2"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay: string;
}

const ServiceCard = ({ icon, title, description, className, delay }: ServiceCardProps) => (
  <div 
    className={cn(
      "rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-5px] animate-fade-in",
      className
    )}
    style={{ animationDelay: delay }}
  >
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Hero;
