export const sqlContent = {
  id: 'sql',
  name: 'SQL',
  icon: 'Database', // Use string for now; can be replaced with lucide-react icon if needed
  difficulty: 'Beginner',
  questionCount: 10,
  overview: {
    introduction: 'SQL (Structured Query Language) is the standard language for relational database management and data manipulation.',
    importance: 'Essential for backend, data engineering, analytics, and more.',
    features: [
      'Declarative syntax',
      'Data definition and manipulation',
      'Widely supported by RDBMSs',
      'Supports transactions, joins, and aggregations'
    ],
    roadmap: [
      'Basics: SELECT, INSERT, UPDATE, DELETE',
      'Joins and subqueries',
      'Indexes and optimization',
      'Stored procedures and triggers'
    ]
  },
  questions: [
    { id: 1, question: 'What is SQL? Why is it important?', answer: '' },
    { id: 2, question: 'Difference between SQL and NoSQL databases?', answer: '' },
    { id: 3, question: 'What are the different types of JOINs in SQL?', answer: '' },
    { id: 4, question: 'Explain the use of GROUP BY and HAVING clauses.', answer: '' },
    { id: 5, question: 'What is a primary key? What is a foreign key?', answer: '' },
    { id: 6, question: 'How does indexing work in SQL databases?', answer: '' },
    { id: 7, question: 'What is normalization? Explain its types.', answer: '' },
    { id: 8, question: 'Difference between WHERE and HAVING clauses.', answer: '' },
    { id: 9, question: 'What is a subquery? Provide an example.', answer: '' },
    { id: 10, question: 'How do transactions work in SQL?', answer: '' }
  ],
  codeExamples: [],
  visualLearning: [],
  practiceProblems: [],
  resources: {
    officialDocs: 'https://www.iso.org/standard/63555.html',
    tutorials: ['https://www.w3schools.com/sql/', 'https://www.sqltutorial.org/'],
    books: ['SQL For Dummies', 'Learning SQL by Alan Beaulieu'],
    practiceLinks: ['https://www.hackerrank.com/domains/sql', 'https://leetcode.com/problemset/database/']
  }
}; 