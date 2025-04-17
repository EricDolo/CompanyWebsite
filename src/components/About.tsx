import { Award, Code, Music, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const About = () => {
  const stats = [
    { 
      icon: <Code className="h-6 w-6" />,
      value: "10+", 
      label: "Projects Completed" 
    },
    { 
      icon: <Users className="h-6 w-6" />,
      value: "5+", 
      label: "Happy Clients" 
    },
    { 
      icon: <Music className="h-6 w-6" />,
      value: "10+", 
      label: "Events Amplified" 
    },
    { 
      icon: <Award className="h-6 w-6" />,
      value: "1+", 
      label: "Years of Experience" 
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dolo Dynamic Team" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full bg-dolo-blue opacity-20 rounded-2xl transform -rotate-3"></div>
              <div className="absolute -z-10 -top-6 -right-6 w-full h-full bg-dolo-purple opacity-20 rounded-2xl transform rotate-3"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Dolo Dynamic Solutions</h2>
              <p className="text-lg text-gray-700 mb-4">
                We are a unique dual-purpose company that combines technical expertise with creative passion. Founded with the vision to provide comprehensive digital solutions and entertainment services under one roof.
              </p>
              <p className="text-lg text-gray-700">
                Our team of skilled developers, designers, and entertainment professionals works together to deliver exceptional results that exceed our clients' expectations, whether it's building innovative software or creating unforgettable events.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={cn(
                    "p-4 rounded-lg text-center animate-fade-in",
                    index % 2 === 0 ? "bg-blue-50" : "bg-purple-50"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
