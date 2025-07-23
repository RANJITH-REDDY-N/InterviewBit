// This file exports all technologies
import { Coffee, Database, FileJson, Code, Zap, Cpu, Network, Shield, Box, TestTube, Layers, Globe, Server, Lock, Cable, Cloud, CloudCog, Container, Workflow, GitBranch, GitMerge, Package, Archive, MessageSquare, Bug, Gauge } from 'lucide-react';
import { javaContent } from './languages/java';
import { sqlContent } from './languages/sql';

// Create a map of all tech content by ID
export const techContent = {
  java: javaContent,
  sql: sqlContent,
  // Add more technologies as they are created
  // json: jsonContent,
  // xml: xmlContent,
  // etc.
};

// Helper function to create a technology object with default values
const createTech = (id, name, icon, difficulty, questionCount, categoryId, color) => ({
  id,
  name,
  icon,
  difficulty: difficulty || 'Intermediate',
  questionCount: questionCount || 0,
  categoryId,
  color: color || 'blue'
});

// Define categories
const categories = [
  { id: 'languages', name: 'Languages', icon: Code, color: 'blue', description: 'Core programming languages' },
  { id: 'frameworks', name: 'Frameworks & Libraries', icon: Layers, color: 'purple', description: 'Modern frameworks and libraries' },
  { id: 'webServices', name: 'Web Services & Security', icon: Globe, color: 'green', description: 'APIs, microservices, and security' },
  { id: 'databases', name: 'Databases', icon: Database, color: 'orange', description: 'Relational and NoSQL databases' },
  { id: 'cloud', name: 'Cloud', icon: Cloud, color: 'cyan', description: 'AWS and cloud services' },
  { id: 'devops', name: 'DevOps', icon: Workflow, color: 'yellow', description: 'CI/CD and containerization' },
  { id: 'tools', name: 'Tools & Methodologies', icon: Gauge, color: 'indigo', description: 'Version control, messaging, and testing' },
  { id: 'systemDesign', name: 'System Design', icon: Cpu, color: 'red', description: 'Architecture and design patterns' }
];

// Define technologies grouped by category
const technologies = {
  languages: [
    createTech('java', 'Java', Coffee, 'Intermediate', 50, 'languages'),
    createTech('sql', 'SQL', Database, 'Beginner', 10, 'languages'),
    createTech('json', 'JSON', FileJson, 'Beginner', 2, 'languages'),
    createTech('xml', 'XML', Code, 'Beginner', 2, 'languages')
  ],
  frameworks: [
    createTech('springBoot', 'Spring Boot', Zap, 'Advanced', 30, 'frameworks', 'purple'),
    createTech('react', 'React/ReactJS', Cpu, 'Intermediate', 20, 'frameworks', 'purple'),
    createTech('springMvc', 'Spring MVC', Network, 'Advanced', 15, 'frameworks', 'purple'),
    createTech('springSecurity', 'Spring Security', Shield, 'Advanced', 10, 'frameworks', 'purple'),
    createTech('springDataJpa', 'Spring Data JPA', Database, 'Intermediate', 5, 'frameworks', 'purple'),
    createTech('angular', 'Angular', Box, 'Intermediate', 10, 'frameworks', 'purple')
  ],
  webServices: [
    createTech('microservices', 'Microservices', Server, 'Advanced', 40, 'webServices', 'green'),
    createTech('restfulApis', 'RESTful APIs', Globe, 'Intermediate', 15, 'webServices', 'green'),
    createTech('jwt', 'JWT', Lock, 'Intermediate', 8, 'webServices', 'green'),
    createTech('graphql', 'GraphQL', Network, 'Intermediate', 9, 'webServices', 'green')
  ],
  databases: [
    createTech('mysql', 'MySQL', Database, 'Beginner', 7, 'databases', 'orange'),
    createTech('postgresql', 'PostgreSQL', Database, 'Intermediate', 5, 'databases', 'orange'),
    createTech('mongodb', 'MongoDB', Database, 'Intermediate', 15, 'databases', 'orange'),
    createTech('jdbc', 'JDBC', Cable, 'Beginner', 3, 'databases', 'orange')
  ],
  cloud: [
    createTech('s3', 'AWS S3', Archive, 'Intermediate', 20, 'cloud', 'cyan'),
    createTech('ec2', 'AWS EC2', Server, 'Intermediate', 20, 'cloud', 'cyan'),
    createTech('lambda', 'AWS Lambda', Zap, 'Intermediate', 20, 'cloud', 'cyan')
  ],
  devops: [
    createTech('docker', 'Docker', Container, 'Intermediate', 20, 'devops', 'yellow'),
    createTech('kubernetes', 'Kubernetes', CloudCog, 'Advanced', 20, 'devops', 'yellow'),
    createTech('jenkins', 'Jenkins', Workflow, 'Intermediate', 20, 'devops', 'yellow')
  ],
  tools: [
    createTech('git', 'Git', GitBranch, 'Beginner', 5, 'tools', 'indigo'),
    createTech('kafka', 'Kafka', MessageSquare, 'Advanced', 20, 'tools', 'indigo'),
    createTech('junit', 'JUnit', TestTube, 'Intermediate', 10, 'tools', 'indigo')
  ],
  systemDesign: [
    createTech('loadBalancing', 'Load Balancing', Network, 'Advanced', 15, 'systemDesign', 'red'),
    createTech('caching', 'Caching', Archive, 'Advanced', 15, 'systemDesign', 'red'),
    createTech('apiGateway', 'API Gateway', Globe, 'Advanced', 15, 'systemDesign', 'red')
  ]
};

// Helper functions to work with the data
export const getAllCategories = () => categories;

export const getCategoryById = (categoryId) => 
  categories.find(category => category.id === categoryId);

// Helper function to get all technologies as an array
export const getAllTechnologies = () => 
  Object.values(technologies).flat();

export const getTechnologyById = (techId) => 
  getAllTechnologies().find(tech => tech.id === techId);

// Helper to get technologies by category
export const getTechnologiesByCategory = (categoryId) => 
  technologies[categoryId] || [];
