
import { useEffect, useRef } from 'react';

interface Skill {
  category: string;
  items: string[];
}

const skillsData: Skill[] = [
  {
    category: "Web dev",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "JavaScript (ES6+)",
      "HTML5 & CSS3"
    ]
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "Authentication & Authorization"
    ]
  },
  {
    category: "Tools & Methodologies",
    items: [
      "Git & GitHub",
      "Docker",
      "CI/CD",
      "Agile Development",
      "Scrum",
      "Performance Optimization"
    ]
  }
];

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title animate-on-scroll opacity-0">Skills & Expertise</h2>
          <p className="section-subtitle animate-on-scroll opacity-0">Technologies and methodologies I've mastered</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, categoryIndex) => (
            <div 
              key={skillCategory.category} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 animate-on-scroll opacity-0"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-medium mb-6">{skillCategory.category}</h3>
              
              <ul className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li 
                    key={skill} 
                    className="flex items-center"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
