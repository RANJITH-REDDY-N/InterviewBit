import React, { useState, createContext, useContext } from 'react';
import { 
  Menu, X, Search, Moon, Sun, Home, Code2, Database, Cloud, 
  Globe, Settings, GitBranch, BookOpen, ChevronRight, Star,
  Share2, ChevronDown, ChevronUp, Timer, Target,
  CheckCircle2, Circle, Brain, Layers, Server, Shield,
  Cpu, Package, Wrench, BarChart3, Coffee, Zap, Box,
  Network, Lock, FileJson, Terminal, Activity, Gauge,
  HardDrive, CloudCog, Container, Workflow, GitMerge,
  TestTube, MessageSquare, Archive, GitCommit, Bug,
  LoaderCircle, ArrowLeft, ArrowRight, Filter, TrendingUp,
  Users, Laptop, Lightbulb, Eye, Code, Play, Copy,
  Check, Clock, Award, Flame, Calendar,
  Hash, Triangle, Link, Palette, HelpCircle, FileText
} from 'lucide-react';
import './App.css';

// Import tech content
import { javaContent } from './tech/languages/java';
import { sqlContent } from './tech/languages/sql';
import { jsonContent } from './tech/languages/json';
import { xmlContent } from './tech/languages/xml';

// Map tech content by ID
const techContentMap = {
  java: javaContent,
  sql: sqlContent,
  json: jsonContent,
  xml: xmlContent
};

// Custom Cable icon
const Cable = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"></path>
    <path d="M3 5V3"></path>
    <path d="M7 5V3"></path>
    <path d="M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"></path>
    <path d="M17 21v-2"></path>
    <path d="M21 21v-2"></path>
    <path d="M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"></path>
  </svg>
);

// Theme Context
const ThemeContext = createContext();
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

// Data Structure - Matching your exact requirements
const categories = {
  languages: {
    name: "Languages",
    icon: Code2,
    color: "blue",
    description: "Core programming languages",
    items: {
      java: { name: "Java", icon: Coffee, questions: 50, difficulty: "Intermediate" },
      sql: { name: "SQL", icon: Database, questions: 10, difficulty: "Beginner" },
      json: { name: "JSON", icon: FileJson, questions: 2, difficulty: "Beginner" },
      xml: { name: "XML", icon: Code, questions: 2, difficulty: "Beginner" }
    }
  },
  frameworks: {
    name: "Frameworks & Libraries",
    icon: Layers,
    color: "purple",
    description: "Modern frameworks and libraries",
    items: {
      springBoot: { name: "Spring Boot", icon: Zap, questions: 30, difficulty: "Advanced" },
      react: { name: "React/ReactJS", icon: Cpu, questions: 20, difficulty: "Intermediate" },
      springMvc: { name: "Spring MVC", icon: Network, questions: 15, difficulty: "Advanced" },
      springSecurity: { name: "Spring Security", icon: Shield, questions: 10, difficulty: "Advanced" },
      springDataJpa: { name: "Spring Data JPA", icon: Database, questions: 5, difficulty: "Intermediate" },
      angular: { name: "Angular", icon: Box, questions: 10, difficulty: "Intermediate" },
      hibernateOrm: { name: "Hibernate ORM", icon: Database, questions: 5, difficulty: "Intermediate" },
      testng: { name: "TestNG", icon: TestTube, questions: 5, difficulty: "Intermediate" },
      redux: { name: "Redux", icon: Layers, questions: 5, difficulty: "Intermediate" },
      jquery: { name: "JQuery", icon: Code, questions: 5, difficulty: "Beginner" },
      bootstrap: { name: "Bootstrap", icon: Palette, questions: 5, difficulty: "Beginner" }
    }
  },
  webServices: {
    name: "Web Services & Security",
    icon: Globe,
    color: "green",
    description: "APIs, microservices, and security",
    items: {
      microservices: { name: "Microservices", icon: Server, questions: 40, difficulty: "Advanced" },
      restfulApis: { name: "RESTful APIs", icon: Globe, questions: 15, difficulty: "Intermediate" },
      swagger: { name: "Swagger", icon: FileJson, questions: 3, difficulty: "Beginner" },
      jwt: { name: "JWT", icon: Lock, questions: 8, difficulty: "Intermediate" },
      graphql: { name: "GraphQL", icon: Network, questions: 9, difficulty: "Intermediate" },
      soap: { name: "SOAP", icon: Globe, questions: 5, difficulty: "Intermediate" }
    }
  },
  databases: {
    name: "Databases",
    icon: Database,
    color: "orange",
    description: "Relational and NoSQL databases",
    items: {
      mysql: { name: "MySQL", icon: Database, questions: 7, difficulty: "Beginner" },
      postgresql: { name: "PostgreSQL", icon: Database, questions: 5, difficulty: "Intermediate" },
      jpa: { name: "JPA", icon: Layers, questions: 5, difficulty: "Intermediate" },
      hibernate: { name: "Hibernate", icon: Database, questions: 5, difficulty: "Intermediate" },
      jdbc: { name: "JDBC", icon: Cable, questions: 3, difficulty: "Beginner" },
      mariadb: { name: "MariaDB", icon: Database, questions: 2, difficulty: "Beginner" },
      nosql: { name: "NoSQL", icon: Database, questions: 2, difficulty: "Beginner" },
      mongodb: { name: "MongoDB", icon: Database, questions: 15, difficulty: "Intermediate" },
      oracle: { name: "Oracle", icon: Database, questions: 3, difficulty: "Intermediate" },
      db2: { name: "DB2", icon: Database, questions: 3, difficulty: "Intermediate" },
      sqlserver: { name: "SQL Server", icon: Database, questions: 3, difficulty: "Intermediate" },
      aurora: { name: "Aurora", icon: Cloud, questions: 3, difficulty: "Intermediate" },
      dynamodb: { name: "DynamoDB", icon: Database, questions: 3, difficulty: "Intermediate" }
    }
  },
  cloud: {
    name: "Cloud",
    icon: Cloud,
    color: "cyan",
    description: "AWS and cloud services (15-20 questions each)",
    items: {
      s3: { name: "AWS S3", icon: Archive, questions: 20, difficulty: "Intermediate" },
      ec2: { name: "AWS EC2", icon: Server, questions: 20, difficulty: "Intermediate" },
      iam: { name: "AWS IAM", icon: Shield, questions: 20, difficulty: "Advanced" },
      rds: { name: "AWS RDS", icon: Database, questions: 20, difficulty: "Intermediate" },
      ecs: { name: "AWS ECS", icon: Container, questions: 20, difficulty: "Advanced" },
      eks: { name: "AWS EKS", icon: CloudCog, questions: 20, difficulty: "Advanced" },
      elb: { name: "AWS ELB", icon: Network, questions: 20, difficulty: "Intermediate" },
      lambda: { name: "AWS Lambda", icon: Zap, questions: 20, difficulty: "Intermediate" },
      pcf: { name: "PCF", icon: Cloud, questions: 2, difficulty: "Intermediate" },
      cloudWatch: { name: "CloudWatch", icon: Activity, questions: 20, difficulty: "Intermediate" }
    }
  },
  devops: {
    name: "DevOps",
    icon: Workflow,
    color: "yellow",
    description: "CI/CD and containerization (15-20 questions each)",
    items: {
      docker: { name: "Docker", icon: Container, questions: 20, difficulty: "Intermediate" },
      jenkins: { name: "Jenkins", icon: Workflow, questions: 20, difficulty: "Intermediate" },
      cicd: { name: "CI/CD", icon: GitMerge, questions: 20, difficulty: "Intermediate" },
      kubernetes: { name: "Kubernetes", icon: CloudCog, questions: 20, difficulty: "Advanced" },
      openshift: { name: "OpenShift", icon: Cloud, questions: 20, difficulty: "Advanced" },
      terraform: { name: "Terraform", icon: Layers, questions: 20, difficulty: "Advanced" },
      maven: { name: "Maven", icon: Package, questions: 20, difficulty: "Beginner" },
      gradle: { name: "Gradle", icon: Package, questions: 20, difficulty: "Intermediate" },
      npm: { name: "NPM", icon: Package, questions: 20, difficulty: "Beginner" }
    }
  },
  tools: {
    name: "Tools & Methodologies",
    icon: Wrench,
    color: "indigo",
    description: "Version control, messaging, and testing",
    items: {
      git: { name: "Git", icon: GitBranch, questions: 5, difficulty: "Beginner" },
      kafka: { name: "Kafka", icon: MessageSquare, questions: 20, difficulty: "Advanced" },
      jms: { name: "JMS", icon: MessageSquare, questions: 5, difficulty: "Intermediate" },
      github: { name: "GitHub", icon: GitBranch, questions: 3, difficulty: "Beginner" },
      gitlab: { name: "GitLab", icon: GitBranch, questions: 3, difficulty: "Beginner" },
      sonarqube: { name: "SonarQube", icon: Gauge, questions: 5, difficulty: "Intermediate" },
      nexus: { name: "Nexus", icon: Archive, questions: 5, difficulty: "Intermediate" },
      junit: { name: "JUnit", icon: TestTube, questions: 10, difficulty: "Intermediate" },
      mockito: { name: "Mockito", icon: Bug, questions: 8, difficulty: "Intermediate" }
    }
  },
  systemDesign: {
    name: "System Design",
    icon: Cpu,
    color: "red",
    description: "Architecture and design patterns",
    items: {
      loadBalancing: { name: "Load Balancing", icon: Network, questions: 15, difficulty: "Advanced" },
      caching: { name: "Caching", icon: HardDrive, questions: 15, difficulty: "Advanced" },
      apiGateway: { name: "API Gateway", icon: Globe, questions: 15, difficulty: "Advanced" },
      rateLimiting: { name: "Rate Limiting", icon: Gauge, questions: 15, difficulty: "Advanced" },
      circuitBreaker: { name: "Circuit Breaker", icon: Zap, questions: 15, difficulty: "Advanced" },
      cdn: { name: "CDN", icon: Globe, questions: 10, difficulty: "Intermediate" },
      dnsConfig: { name: "DNS Configurations", icon: Network, questions: 5, difficulty: "Intermediate" },
      serviceDiscovery: { name: "Service Discovery", icon: Search, questions: 10, difficulty: "Advanced" },
      serviceMesh: { name: "Service Mesh", icon: Network, questions: 10, difficulty: "Advanced" },
      databaseSharding: { name: "Database Sharding", icon: Database, questions: 10, difficulty: "Advanced" },
      replications: { name: "Replications", icon: Copy, questions: 10, difficulty: "Advanced" },
      capTheorem: { name: "CAP Theorem", icon: Triangle, questions: 5, difficulty: "Advanced" },
      consistentHashing: { name: "Consistent Hashing", icon: Hash, questions: 2, difficulty: "Advanced" },
      lbAlgorithms: { name: "LB Algorithms", icon: GitBranch, questions: 1, difficulty: "Intermediate" },
      apiIntegration: { name: "Frontend-Backend API Integration", icon: Link, questions: 10, difficulty: "Intermediate" },
      microservicesScenarios: { name: "Microservices Scenarios", icon: Server, questions: 30, difficulty: "Advanced" }
    }
  }
};

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTheme = () => setDarkMode(!darkMode);

  const navigateTo = (view, category = null, tech = null) => {
    setCurrentView(view);
    setSelectedCategory(category);
    setSelectedTech(tech);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
        <Header 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="main-layout">
          <Sidebar 
            isOpen={sidebarOpen}
            currentView={currentView}
            selectedCategory={selectedCategory}
            navigateTo={navigateTo}
          />

          <main className={`main-content ${sidebarOpen ? 'with-sidebar' : ''}`}>
            <div className="content-wrapper">
              <Breadcrumb 
                currentView={currentView}
                selectedCategory={selectedCategory}
                selectedTech={selectedTech}
                navigateTo={navigateTo}
              />

              {currentView === 'home' && <HomeDashboard navigateTo={navigateTo} />}
              {currentView === 'category' && selectedCategory && (
                <CategoryView 
                  category={selectedCategory} 
                  navigateTo={navigateTo}
                />
              )}
              {currentView === 'technology' && selectedTech && (
                <TechnologyView 
                  category={selectedCategory}
                  technology={selectedTech}
                  techContent={techContentMap[selectedTech]}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

// Header Component
const Header = ({ searchQuery, setSearchQuery, sidebarOpen, setSidebarOpen }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="menu-toggle"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="logo">
            <Code2 className="logo-icon" size={28} />
            <h1>Tech Interview Guide</h1>
          </div>
        </div>

        <div className="header-right">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button
            onClick={toggleTheme}
            className="theme-toggle"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
const Sidebar = ({ isOpen, currentView, selectedCategory, navigateTo }) => {
  if (!isOpen) return null;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <button
          onClick={() => navigateTo('home')}
          className={`nav-item ${currentView === 'home' ? 'active' : ''}`}
        >
          <Home size={20} />
          <span>Dashboard</span>
        </button>

        <div className="nav-section">
          <h3>Categories</h3>
          {Object.entries(categories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => navigateTo('category', key)}
                className={`nav-item ${currentView === 'category' && selectedCategory === key ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

// Breadcrumb Component
const Breadcrumb = ({ currentView, selectedCategory, selectedTech, navigateTo }) => {
  return (
    <nav className="breadcrumb">
      <button onClick={() => navigateTo('home')} className="breadcrumb-item">
        Home
      </button>
      
      {selectedCategory && (
        <>
          <ChevronRight size={16} />
          <button onClick={() => navigateTo('category', selectedCategory)} className="breadcrumb-item">
            {categories[selectedCategory].name}
          </button>
        </>
      )}
      
      {selectedTech && (
        <>
          <ChevronRight size={16} />
          <span className="breadcrumb-item current">
            {categories[selectedCategory].items[selectedTech].name}
          </span>
        </>
      )}
    </nav>
  );
};

// HomeDashboard Component
const HomeDashboard = ({ navigateTo }) => {
  const totalQuestions = Object.values(categories).reduce((acc, cat) => 
    acc + Object.values(cat.items).reduce((sum, item) => sum + item.questions, 0), 0
  );

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Technical Interview Preparation Guide</h2>
        <p>Master your technical interviews with comprehensive Q&A coverage across {totalQuestions}+ questions</p>
      </div>

      <div className="categories-section">
        <h3>Choose a Category</h3>
        <div className="category-grid">
          {Object.entries(categories).map(([key, category]) => {
            const Icon = category.icon;
            const categoryQuestions = Object.values(category.items).reduce((sum, item) => sum + item.questions, 0);
            
            return (
              <button
                key={key}
                onClick={() => navigateTo('category', key)}
                className={`category-card ${category.color}`}
              >
                <div className="category-icon">
                  <Icon size={32} />
                </div>
                <h4>{category.name}</h4>
                <p>{category.description}</p>
                <div className="category-footer">
                  <span className="question-count">{categoryQuestions} questions</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// CategoryView Component
const CategoryView = ({ category, navigateTo }) => {
  const categoryData = categories[category];
  
  return (
    <div className="category-view">
      <div className="category-header">
        <div className={`category-icon ${categoryData.color}`}>
          <categoryData.icon size={32} />
        </div>
        <div>
          <h2>{categoryData.name}</h2>
          <p>{categoryData.description}</p>
        </div>
      </div>

      <div className="technologies-section">
        <div className="section-header">
          <h3>Technologies</h3>
          <div className="filter-dropdown">
            <Filter size={20} />
            <select>
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        <div className="tech-grid">
          {Object.entries(categoryData.items).map(([key, tech]) => {
            const Icon = tech.icon;
            
            return (
              <button
                key={key}
                onClick={() => navigateTo('technology', category, key)}
                className="tech-card"
              >
                <div className={`tech-icon-wrapper ${categoryData.color}`}>
                  <div className="tech-icon">
                    <Icon size={48} />
                  </div>
                </div>
                
                <h4>{tech.name}</h4>
                
                <div className="tech-meta">
                  <span className={`difficulty ${tech.difficulty.toLowerCase()}`}>
                    {tech.difficulty}
                  </span>
                  <span className="questions-count">
                    {tech.questions} questions
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// TechnologyView Component
const TechnologyView = ({ category, technology, techContent }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const categoryData = categories[category];
  const techData = categoryData.items[technology];
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'questions', label: 'Interview Q&A', icon: HelpCircle },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'quiz', label: 'Quiz', icon: Brain }
  ];

  return (
    <div className="technology-view">
      <div className="tech-header-card">
        <div className={`tech-icon-large ${categoryData.color}`}>
          <techData.icon size={48} />
        </div>
        <div>
          <h2>{techData.name}</h2>
          <div className="tech-info">
            <span className={`difficulty ${techData.difficulty.toLowerCase()}`}>
              {techData.difficulty}
            </span>
            <span>{techData.questions} questions</span>
          </div>
        </div>
      </div>

      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          >
            <tab.icon size={18} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 'overview' && techContent?.overview && (
          <div className="overview-content">
            <section className="overview-section">
              <h3>{techContent.overview.introduction.title}</h3>
              <p>{techContent.overview.introduction.content}</p>
              {techContent.overview.introduction.keyPoints && (
                <ul className="key-points">
                  {techContent.overview.introduction.keyPoints.map((point, idx) => (
                    <li key={idx}>
                      <CheckCircle2 className="point-icon" size={20} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {techContent.overview.importance && (
              <section className="overview-section">
                <h3>{techContent.overview.importance.title}</h3>
                <div className="importance-points">
                  {techContent.overview.importance.points.map((point, idx) => (
                    <div key={idx} className="importance-item">
                      <CheckCircle2 className="point-icon" size={20} />
                      <div>
                        <strong>{point.text}</strong>
                        {point.description && <p>{point.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {activeTab === 'questions' && techContent?.questions && (
          <div className="questions-content">
            {techContent.questions.map((question, index) => (
              <QuestionCard key={question.id} question={question} index={index + 1} />
            ))}
          </div>
        )}

        {activeTab === 'resources' && techContent?.resources && (
          <div className="resources-content">
            {techContent.resources.officialDocs && (
              <div className="resource-section">
                <h3>Official Documentation</h3>
                <ul>
                  {techContent.resources.officialDocs.map((doc, idx) => (
                    <li key={idx}>
                      <a href={doc.url} target="_blank" rel="noopener noreferrer">
                        <FileText size={16} />
                        {doc.title}
                      </a>
                      {doc.description && <span className="resource-desc">{doc.description}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {techContent.resources.tutorials && (
              <div className="resource-section">
                <h3>Tutorials & Guides</h3>
                <ul>
                  {techContent.resources.tutorials.map((tutorial, idx) => (
                    <li key={idx}>
                      <a href={tutorial.url} target="_blank" rel="noopener noreferrer">
                        <BookOpen size={16} />
                        {tutorial.title}
                      </a>
                      {tutorial.type && <span className="resource-type">{tutorial.type}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {techContent.resources.videos && (
              <div className="resource-section">
                <h3>Video Resources</h3>
                <ul>
                  {techContent.resources.videos.map((video, idx) => (
                    <li key={idx}>
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        <Play size={16} />
                        {video.title}
                      </a>
                      {video.duration && <span className="resource-duration">{video.duration}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {techContent.resources.practiceLinks && (
              <div className="resource-section">
                <h3>Practice Platforms</h3>
                <ul>
                  {techContent.resources.practiceLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <Code size={16} />
                        {link.title}
                      </a>
                      {link.description && <span className="resource-desc">{link.description}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="quiz-content">
            <div className="quiz-placeholder">
              <Brain size={48} />
              <h3>Quiz Mode Coming Soon!</h3>
              <p>Test your knowledge with interactive quizzes based on the interview questions.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Question Card Component
const QuestionCard = ({ question, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="question-card">
      <div 
        className="question-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3>{index}. {question.question}</h3>
        <ChevronDown className={`expand-icon ${isExpanded ? 'expanded' : ''}`} size={20} />
      </div>
      
      {isExpanded && (
        <div className="question-body">
          <div className="answer-section">
            <p>{question.answer}</p>
            
            {question.keyPoints && (
              <div className="key-points-box">
                <h4>Key Points:</h4>
                <ul>
                  {question.keyPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {question.example && (
              <div className="example-box">
                <h4>Example:</h4>
                <pre className="code-example">{question.example}</pre>
              </div>
            )}
            
            {question.note && (
              <div className="note-box">
                <strong>Note:</strong> {question.note}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;