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
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Sandrine
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
                Frontend Engineer
              </p>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                I create smart apps with smart code
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <MapPin className="w-4 h-4" />
                <span>Paris / Remote</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <a href="mailto:dasilva.sandrine31@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Get in touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/sandrine-ds" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
              <Card className="mb-12">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Passionate frontend engineer with over 4 years of experience building beautiful, 
                    performant web applications. I love turning complex problems into simple, 
                    elegant solutions that users actually enjoy using.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring the latest design trends, 
                    contributing to open source projects, or enjoying a good coffee while 
                    brainstorming the next big idea.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.title} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
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

      {/* Experience Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={exp.title} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="self-start md:self-center mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to bring your ideas to life? I'm always excited to work on new projects 
              and collaborate with amazing people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:dasilva.sandrine31@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
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
      <footer className="bg-secondary/50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Sandrine Da Silva. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}