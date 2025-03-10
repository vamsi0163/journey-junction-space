
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the animation class without removing it when scrolling away
            if (!entry.target.classList.contains('animate-fade-up')) {
              entry.target.classList.add('animate-fade-up');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach(el => {
      // Remove opacity-0 to prevent elements from disappearing
      el.classList.remove('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      childElements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title animate-on-scroll opacity-0">About Me</h2>
          <p className="section-subtitle animate-on-scroll opacity-0">The journey and values that define my work</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg animate-on-scroll opacity-0">
              I'm a full-stack developer with a passion for creating elegant, functional applications that solve real-world problems. With expertise in the MERN stack (MongoDB, Express.js, React, Node.js), I build seamless experiences that prioritize both user needs and business goals.
            </p>
            <p className="text-lg animate-on-scroll opacity-0">
              My approach is grounded in minimalism and purpose – every line of code and design element serves a function. I believe that the best digital products are those that feel intuitive and natural, requiring minimal effort from users while providing maximum value.
            </p>
            <p className="text-lg animate-on-scroll opacity-0">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or refining my design skills. I'm constantly learning and evolving as a developer, staying on top of industry trends while maintaining a focus on the timeless principles of good software design.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg animate-on-scroll opacity-0">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
              <img 
                src="/placeholder.svg" 
                alt="Professional headshot" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary rounded-2xl -z-10 animate-on-scroll opacity-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-black/10 rounded-2xl -z-10 animate-on-scroll opacity-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
