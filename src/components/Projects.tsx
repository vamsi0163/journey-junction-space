
import { useState, useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with cart functionality, payment processing, and user accounts.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "An intuitive task management application with drag-and-drop functionality and team collaboration features.",
    tags: ["React", "Redux", "Node.js", "Socket.io"],
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 3,
    title: "Real Estate Listing Platform",
    description: "A property marketplace with advanced filtering, map integration, and user messaging.",
    tags: ["MongoDB", "Express", "React", "Google Maps API"],
    image: "/placeholder.svg",
    link: "#"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title animate-on-scroll opacity-0">Selected Projects</h2>
          <p className="section-subtitle animate-on-scroll opacity-0">Showcasing my expertise and problem-solving approach</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs py-1 px-2 bg-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Detail Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-2">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-xs py-1 px-2 bg-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                
                <p className="mb-6">
                  Detailed project description would go here. Features, challenges, solutions, technologies used, and more.
                </p>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={selectedProject.link}
                    className="button-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project
                  </a>
                  
                  <button 
                    className="text-muted-foreground"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
