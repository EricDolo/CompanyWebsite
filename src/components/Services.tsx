import { Code, Laptop, Smartphone, PenTool, Music, Speaker, Radio, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Services = () => {
  const softwareServices = [
    {
      icon: <Laptop className="h-12 w-12 p-2 bg-blue-100 text-dolo-blue rounded-lg" />,
      title: "Web Development",
      description: "Custom websites, web applications, and e-commerce solutions tailored to your business needs."
    },
    {
      icon: <Smartphone className="h-12 w-12 p-2 bg-blue-100 text-dolo-blue rounded-lg" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android that engage your users."
    },
    {
      icon: <PenTool className="h-12 w-12 p-2 bg-blue-100 text-dolo-blue rounded-lg" />,
      title: "UI/UX Design",
      description: "User-centered design that enhances user experience and visual appeal of your digital products."
    },
    {
      icon: <Code className="h-12 w-12 p-2 bg-blue-100 text-dolo-blue rounded-lg" />,
      title: "Custom Software",
      description: "Bespoke software solutions that streamline your business operations and improve efficiency."
    }
  ];

  const entertainmentServices = [
    {
      icon: <Music className="h-12 w-12 p-2 bg-purple-100 text-dolo-purple rounded-lg" />,
      title: "DJ Services",
      description: "Professional DJ services for weddings, corporate events, parties, and more."
    },
    {
      icon: <Speaker className="h-12 w-12 p-2 bg-purple-100 text-dolo-purple rounded-lg" />,
      title: "Equipment Rental",
      description: "High-quality sound, lighting, and stage equipment rental for any event size."
    },
    {
      icon: <Radio className="h-12 w-12 p-2 bg-purple-100 text-dolo-purple rounded-lg" />,
      title: "Audio Production",
      description: "Sound engineering, mixing, and editing services for events and studio productions."
    },
    {
      icon: <BarChart3 className="h-12 w-12 p-2 bg-purple-100 text-dolo-purple rounded-lg" />,
      title: "Digital Marketing",
      description: "Event promotion, social media management, and content creation for maximum exposure."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a unique combination of technical expertise and creative services to bring your projects to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Software Development Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-2 bg-dolo-blue rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-bold">Software Development</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softwareServices.map((service, index) => (
                <ServiceCard 
                  key={`software-${index}`} 
                  {...service} 
                  className="bg-white hover:border-dolo-blue"
                  delay={`${index * 0.1}s`}
                />
              ))}
            </div>
          </div>

          {/* Entertainment Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-2 bg-dolo-purple rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-bold">Entertainment Solutions</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {entertainmentServices.map((service, index) => (
                <ServiceCard 
                  key={`entertainment-${index}`} 
                  {...service} 
                  className="bg-white hover:border-dolo-purple"
                  delay={`${index * 0.1 + 0.4}s`}
                />
              ))}
            </div>
          </div>
        </div>

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
  <Card
    className={cn(
      "p-6 border-2 border-transparent transition-all duration-300 hover:-translate-y-1 animate-fade-in",
      className
    )}
    style={{ animationDelay: delay }}
  >
    <div className="mb-4">
      {icon}
    </div>
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </Card>
);

export default Services;
