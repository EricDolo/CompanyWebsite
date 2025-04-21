import { useState } from "react";
import { Code, Laptop, Smartphone, PenTool, Music, Speaker, Radio, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const Services = () => {
  const softwareServices = [
    {
      icon: <Laptop className="h-12 w-12 p-2 bg-blue-100 text-dolo-blue rounded-lg" />,
      title: "Web Development",
      description: "Custom websites, web applications, and e-commerce solutions tailored to your business needs.",
      details: [
        {
          label: "Business Websites",
          text: "Modern, responsive sites that showcase your brand and drive conversions."
        },
        {
          label: "Web Applications",
          text: "Interactive platforms with features like user accounts, dashboards, and data management."
        },
        {
          label: "E-commerce Solutions",
          text: "Secure online stores with payment integration, product management, and seamless UX."
        }
      ]
    },
    {
      icon: <Smartphone className="h-12 w-12 p-2 bg-blue-100 text-dolo-blue rounded-lg" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      details: [
        {
          label: "iOS Apps",
          text: "High-performance apps designed specifically for Apple devices."
        },
        {
          label: "Android Apps",
          text: "Robust applications optimized for Android devices."
        },
        {
          label: "Cross-Platform Solutions",
          text: "Single codebase apps that run on both iOS and Android."
        }
      ]
    },
    {
      icon: <Code className="h-12 w-12 p-2 bg-blue-100 text-dolo-blue rounded-lg" />,
      title: "Software Development",
      description: "Custom software solutions to streamline your business processes.",
      details: [
        {
          label: "Desktop Applications",
          text: "Tailored software for Windows, macOS, and Linux."
        },
        {
          label: "API Development",
          text: "Building robust APIs for seamless integration with third-party services."
        },
        {
          label: "Database Management",
          text: "Efficient data storage, retrieval, and management solutions."
        }
      ]
    },
    {
      icon: <PenTool className="h-12 w-12 p-2 bg-blue-100 text-dolo-blue rounded-lg" />,
      title: "UI/UX Design",
      description: "User-centered design services to enhance user experience and engagement.",
      details: [
        {
          label: "Wireframing & Prototyping",
          text: "Creating interactive prototypes to visualize the user journey."
        },
        {
          label: "User Research & Testing",
          text: "Gathering insights to inform design decisions and improve usability."
        },
        {
          label: "Brand Identity Design",
          text: "Crafting unique visual identities that resonate with your audience."
        }
      ]
    }
  ];

  const entertainmentServices = [
    {
      icon: <Music className="h-12 w-12 p-2 bg-purple-100 text-dolo-purple rounded-lg" />,
      title: "DJ Services",
      description: "Professional DJ services for weddings, corporate events, parties, and more.",
      details: [
        {
          label: "Weddings",
          text: "Creating the perfect vibe for your special day, from ceremony to the last dance."
        },
        {
          label: "Corporate Events",
          text: "Professional music curation tailored to your company's tone and audience."
        },
        {
          label: "Parties",
          text: "Energetic sets that keep the dance floor alive all night long."
        }
      ]
    },
    {
      icon: <Speaker className="h-12 w-12 p-2 bg-purple-100 text-dolo-purple rounded-lg" />,
      title: "Equipment Rental",
      description: "High-quality sound, lighting, and stage equipment rental for any event size.",
      details: [
        {
          label: "Sound Systems",
          text: "Top-tier speakers and microphones for crystal-clear audio."
        },
        {
          label: "Lighting",
          text: "Dynamic lighting solutions to enhance your event atmosphere."
        },
        {
          label: "Stage Setup",
          text: "Customizable stages and trussing for any venue."
        }
      ]
    },
    {
      icon: <Radio className="h-12 w-12 p-2 bg-purple-100 text-dolo-purple rounded-lg" />,
      title: "Audio Production",
      description: "Sound engineering, mixing, and editing services for events and studio productions.",
      details: [
        {
          label: "Live Events",
          text: "Professional mixing and sound balancing on-site."
        },
        {
          label: "Studio Sessions",
          text: "Recording, mixing, and mastering for artists and creators."
        },
        {
          label: "Podcasts",
          text: "Editing and audio enhancement for clean, engaging episodes."
        }
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12 p-2 bg-purple-100 text-dolo-purple rounded-lg" />,
      title: "Digital Marketing",
      description: "Event promotion, social media management, and content creation for maximum exposure.",
      details: [
        {
          label: "Social Media Management",
          text: "Content scheduling, engagement, and growth strategy."
        },
        {
          label: "Event Campaigns",
          text: "Targeted ads and promotions to boost your event attendance."
        },
        {
          label: "Brand Strategy",
          text: "Crafting compelling messages and visuals that connect with your audience."
        }
      ]
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
  details?: { label: string; text: string }[];
  className?: string;
  delay: string;
}

const ServiceCard = ({ icon, title, description, details, className, delay }: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => details && setIsOpen(true)}
        className={cn(
          "p-6 border-2 border-transparent transition-all duration-300 hover:-translate-y-1 animate-fade-in",
          details ? "cursor-pointer" : "",
          className
        )}
        style={{ animationDelay: delay }}
      >
        <div className="mb-4">{icon}</div>
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </Card>

      {details && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-2xl text-center">
            <DialogHeader className="border border-gray-200 bg-gray-50 rounded-xl p-4 shadow-sm text-center gradient-bg">
              <DialogTitle className="text-3xl text-center">{title}</DialogTitle>
              <DialogDescription className="text-gray-600 text-center">{description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-4 text-center">
              {details.map((item, i) => (
                <div key={i} className="border border-gray-200 bg-gray-50 rounded-xl p-4 shadow-sm text-center">
                  <h5 className="text-md font-semibold">{item.label}</h5>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}

    </>
  );
};

export default Services;
