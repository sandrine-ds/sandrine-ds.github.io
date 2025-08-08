import { Github, Linkedin, Mail, MapPin, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React', 'TypeScript', 'JavaScript', 'Vue.js', 'Next.js', 'Tailwind CSS',
  'Node.js', 'GraphQL', 'REST APIs', 'Git', 'Figma', 'Responsive Design'
];

const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'A modern dashboard for managing online stores with real-time analytics and inventory management.',
    tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind'],
    github: 'https://github.com/sandrine-ds/ecommerce-dashboard',
    demo: 'https://ecommerce-demo.vercel.app'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with drag-and-drop functionality and team features.',
    tech: ['Vue.js', 'Vuex', 'Firebase', 'CSS Grid'],
    github: 'https://github.com/sandrine-ds/task-manager',
    demo: 'https://task-manager-demo.netlify.app'
  },
  {
    title: 'Weather Forecast Widget',
    description: 'Beautiful weather widget with animated icons and 7-day forecast using OpenWeather API.',
    tech: ['React', 'API Integration', 'CSS Animations'],
    github: 'https://github.com/sandrine-ds/weather-widget',
    demo: 'https://weather-widget-demo.surge.sh'
  }
];

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise web applications, mentoring junior developers, and implementing modern React patterns.'
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    period: '2020 - 2022',
    description: 'Developed responsive websites and web applications for various clients using React, Vue.js, and modern CSS frameworks.'
  },
  {
    title: 'Junior Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: 'Built user interfaces and collaborated with design teams to create engaging user experiences for mobile and web platforms.'
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="animate-fade-in">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-muted-foreground mb-2">Hey There,</h2>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  I'm <span className="text-primary">Sandrine</span>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I create smart apps with smart code. Frontend engineer passionate about 
                building beautiful, performant web applications.
              </p>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <MapPin className="w-4 h-4" />
                <span>Paris / Remote</span>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="rounded-full">
                  <a href="mailto:dasilva.sandrine31@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Get in touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full">
                  <a href="https://github.com/sandrine-ds" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Content - Profile */}
            <div className="relative animate-slide-in">
              <div className="relative w-full max-w-md mx-auto">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-secondary rounded-full transform rotate-12 scale-110"></div>
                <div className="absolute inset-0 bg-primary/20 rounded-full transform -rotate-6 scale-95"></div>
                
                {/* Profile image placeholder */}
                <div className="relative w-80 h-80 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Code2 className="w-32 h-32 text-primary-foreground" />
                </div>
                
                {/* Stats */}
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-foreground">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-card rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-foreground">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What do I help?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I turn your ideas into digital products and help 
                your problems solving through development solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Website Design</h3>
                <p className="text-muted-foreground mb-4">Frontend development</p>
                <Badge variant="secondary" className="text-xs">24 Projects</Badge>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile App Design</h3>
                <p className="text-muted-foreground mb-4">UI Projects</p>
                <Badge variant="secondary" className="text-xs">41 Projects</Badge>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
                <p className="text-muted-foreground mb-4">UI Projects</p>
                <Badge variant="secondary" className="text-xs">24 Projects</Badge>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">285+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">190+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Latest Works</h2>
              <p className="text-lg text-muted-foreground">
                Perfect solutions for digital experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.title} className="group hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild className="rounded-full">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild className="rounded-full">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work Experience</h2>
              <p className="text-lg text-muted-foreground">
                Building digital solutions across various industries
              </p>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.title} className="flex gap-6 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="w-px h-24 bg-border"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="self-start md:self-center mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Let's make something amazing together!
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Start by saying hi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="rounded-full">
                <a href="mailto:dasilva.sandrine31@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="https://www.linkedin.com/in/sandrine-da-silva/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Sandrine Da Silva. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}