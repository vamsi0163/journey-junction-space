
import { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !textRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      textRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  return (
    <section ref={containerRef} className="min-h-screen flex items-center relative overflow-hidden">
      <div className="page-container pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-sm mb-8 animate-fade-in">
            Full Stack Developer
          </span>
          
          <h1 
            ref={textRef}
            className="section-title text-5xl md:text-7xl font-medium leading-tight md:leading-tight mb-6 parallax"
          >
            Creating digital experiences with purpose and precision
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            I'm a full-stack developer who combines clean code with thoughtful design to build meaningful applications
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="button-primary w-full sm:w-auto">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-2 rounded-full border border-black hover:bg-secondary transition-colors w-full sm:w-auto">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-20 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="absolute top-1/4 left-20 w-64 h-64 bg-secondary/50 rounded-full filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-1/4 right-20 w-64 h-64 bg-accent/50 rounded-full filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
