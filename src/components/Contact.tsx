import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    service: "software" // Default service
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     toast({
  //       title: "Message sent!",
  //       description: "We'll get back to you as soon as possible.",
  //     });
      
  //     setFormData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //       service: "software"
  //     });
      
  //     setIsSubmitting(false);
  //   }, 1500);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS send function
    emailjs
      .send(
        "service_4pt4z8d", // Replace with your EmailJS Service ID
        "template_aaumnbg", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          service: formData.service,
        },
        "bmsk5hmjbWQzc51bt" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "We'll get back to you as soon as possible.",
          });
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            service: "software",
          });
          setIsSubmitting(false);
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive",
          });
          console.error("EmailJS error:", error);
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-dolo-blue" />,
      label: "Email",
      value: "doloeric37@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-dolo-blue" />,
      label: "Phone",
      value: "+27 (063) 440-6631",
    },
    {
      icon: <MapPin className="h-5 w-5 text-dolo-blue" />,
      label: "Location",
      value: "Phillip Nel Park, Pretoria, 0029",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or need our services? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{info.label}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">Working Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block mb-2 font-medium">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dolo-blue focus:border-transparent"
                  required
                >
                  <option value="software">Software Development</option>
                  <option value="dj">DJ Services</option>
                  <option value="equipment">Equipment Rental</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full gradient-bg flex items-center justify-center gap-2" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>Send Message <Send className="h-4 w-4" /></>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
