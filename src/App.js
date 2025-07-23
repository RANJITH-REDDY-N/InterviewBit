import React, { useState, useEffect, createContext, useContext } from 'react';
import { 
  Menu, X, Search, Moon, Sun, Home, Code2, Database, Cloud, 
  Globe, Settings, GitBranch, BookOpen, ChevronRight, Star,
  Bookmark, Share2, ChevronDown, ChevronUp, Timer, Target,
  CheckCircle2, Circle, Brain, Layers, Server, Shield,
  Cpu, Package, Wrench, BarChart3, Coffee, Zap, Box,
  Network, Lock, FileJson, Terminal, Activity, Gauge,
  HardDrive, CloudCog, Container, Workflow, GitMerge,
  TestTube, MessageSquare, Archive, GitCommit, Bug,
  LoaderCircle, ArrowLeft, ArrowRight, Filter, TrendingUp,
  Users, Laptop, Lightbulb, Eye, Code, Play, Copy,
  Check, BookMarked, Clock, Award, Flame, Calendar,
  Hash, Triangle, Link, Palette
} from 'lucide-react';
import './index.css';
import { techContent } from './tech';

// Custom icons
const HelpCircle = (props) => (
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
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

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

// Progress Context
const ProgressContext = createContext();
const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
};

// Data Structure - Matching your exact requirements
export const categories = {
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

// Header Component
const Header = ({ searchQuery, setSearchQuery, sidebarOpen, setSidebarOpen }) => {
  const { darkMode, toggleTheme } = useTheme();
  const { progress } = useProgress();
  
  const totalQuestions = Object.values(categories).reduce((acc, cat) => 
    acc + Object.values(cat.items).reduce((sum, item) => sum + item.questions, 0), 0
  );
  
  const completedQuestions = Object.values(progress).reduce((acc, val) => acc + val, 0);
  const progressPercentage = Math.round((completedQuestions / totalQuestions) * 100);

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

          <div className="progress-bar-container">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="progress-text">{progressPercentage}%</span>
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
  const { darkMode } = useTheme();
  const { progress } = useProgress();
  
  const stats = {
    totalQuestions: Object.values(categories).reduce((acc, cat) => 
      acc + Object.values(cat.items).reduce((sum, item) => sum + item.questions, 0), 0
    ),
    completedQuestions: Object.values(progress).reduce((acc, val) => acc + val, 0),
    bookmarkedQuestions: 12,
    studyStreak: 5
  };

  return (
    <div className="dashboard">
      <div className="welcome-section">
        <h2>Welcome to Tech Interview Guide</h2>
        <p>Master technical interviews with our comprehensive guide covering all major technologies and concepts.</p>
        
        <div className="stats-grid">
          <div className="stat-card">
            <BookOpen className="stat-icon blue" size={24} />
            <div className="stat-content">
              <span className="stat-value">{stats.totalQuestions}</span>
              <span className="stat-label">Total Questions</span>
            </div>
          </div>
          <div className="stat-card">
            <CheckCircle2 className="stat-icon green" size={24} />
            <div className="stat-content">
              <span className="stat-value">{stats.completedQuestions}</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
          <div className="stat-card">
            <Bookmark className="stat-icon yellow" size={24} />
            <div className="stat-content">
              <span className="stat-value">{stats.bookmarkedQuestions}</span>
              <span className="stat-label">Bookmarked</span>
            </div>
          </div>
          <div className="stat-card">
            <Flame className="stat-icon red" size={24} />
            <div className="stat-content">
              <span className="stat-value">{stats.studyStreak} days</span>
              <span className="stat-label">Study Streak</span>
            </div>
          </div>
        </div>
      </div>

      <div className="categories-section">
        <h3>Choose a Category</h3>
        <div className="category-grid">
          {Object.entries(categories).map(([key, category]) => {
            const Icon = category.icon;
            const categoryQuestions = Object.values(category.items).reduce((sum, item) => sum + item.questions, 0);
            const categoryProgress = Object.entries(category.items).reduce((sum, [itemKey]) => 
              sum + (progress[`${key}_${itemKey}`] || 0), 0
            );
            const progressPercentage = Math.round((categoryProgress / categoryQuestions) * 100);
            
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
                
                <div className="category-progress">
                  <div className="progress-info">
                    <span>Progress</span>
                    <span>{progressPercentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <span className="progress-details">
                    {categoryProgress} / {categoryQuestions} questions
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="recent-section">
        <h3>Recently Viewed</h3>
        <div className="empty-state">
          <Clock size={48} />
          <p>No recent activity</p>
        </div>
      </div>
    </div>
  );
};

// CategoryView Component
const CategoryView = ({ category, navigateTo }) => {
  const { darkMode } = useTheme();
  const { progress } = useProgress();
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
            const completed = progress[`${category}_${key}`] || 0;
            const progressPercentage = Math.round((completed / tech.questions) * 100);
            
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

                <div className="tech-progress">
                  <div className="progress-info">
                    <span>Progress</span>
                    <span>{completed}/{tech.questions}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                {progressPercentage === 100 && (
                  <div className="completed-badge">
                    <Award size={16} />
                    <span>Completed!</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// TechnologyView Component (simplified for space)
const TechnologyView = ({ technology }) => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  
  const techData = technology;
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'questions', label: 'Interview Questions', icon: HelpCircle },
    { id: 'examples', label: 'Code Examples', icon: Code },
    { id: 'visual', label: 'Visual Learning', icon: Lightbulb },
    { id: 'practice', label: 'Practice', icon: Play },
    { id: 'resources', label: 'Resources', icon: BookOpen }
  ];

  return (
    <div className="technology-view">
      <div className="tech-header">
        <div className={`tech-icon-large ${techData.color}`}>
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
        {activeTab === 'overview' && (
          <div className="overview-content">
            <section>
              <h3>What is {techData.name}?</h3>
              <p>
                {techData.name} is a powerful technology used in modern software development. 
                This comprehensive guide will help you master all the essential concepts and prepare for technical interviews.
              </p>
            </section>

            <section>
              <h3>Why is it important?</h3>
              <ul>
                <li>
                  <CheckCircle2 className="green" size={20} />
                  <span>Widely used in enterprise applications</span>
                </li>
                <li>
                  <CheckCircle2 className="green" size={20} />
                  <span>High demand in the job market</span>
                </li>
                <li>
                  <CheckCircle2 className="green" size={20} />
                  <span>Essential for building scalable applications</span>
                </li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'questions' && (
          <div className="questions-content">
            <div className="empty-state">
              <Target size={48} />
              <p>Interview questions for {techData.name} are coming soon!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [progress, setProgress] = useState({});
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedProgress = localStorage.getItem('techInterviewProgress');
    const savedBookmarks = localStorage.getItem('techInterviewBookmarks');
    if (savedProgress) setProgress(JSON.parse(savedProgress));
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const navigateTo = (view, category = null, tech = null) => {
    setCurrentView(view);
    setSelectedCategory(category);
    setSelectedTech(tech);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ProgressContext.Provider value={{ progress, setProgress, bookmarks, setBookmarks }}>
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
                    technology={techContent[selectedTech]}
                  />
                )}
              </div>
            </main>
          </div>
        </div>
      </ProgressContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;