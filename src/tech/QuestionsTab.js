import React, { useState } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import QuestionCard from './QuestionCard';
import './QuestionsTab.css';

const QuestionsTab = ({ questions }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [topicFilter, setTopicFilter] = useState('all');

  // Extract unique topics and difficulties
  const topics = [...new Set(questions.map(q => q.topic))];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  // Filter questions based on search and filters
  const filteredQuestions = questions.filter(question => {
    const matchesSearch = searchQuery === '' || 
      question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDifficulty = difficultyFilter === 'all' || 
      question.difficulty === difficultyFilter;
    
    const matchesTopic = topicFilter === 'all' || 
      question.topic === topicFilter;
    
    return matchesSearch && matchesDifficulty && matchesTopic;
  });

  if (!questions || questions.length === 0) {
    return (
      <div className="empty-state">
        <BookOpen size={48} />
        <h3>No questions available</h3>
        <p>Questions for this topic are coming soon!</p>
      </div>
    );
  }

  return (
    <div className="questions-tab">
      {/* Search and Filter Bar */}
      <div className="questions-header">
        <div className="search-filter-container">
          <div className="search-box">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-group">
            <div className="filter-item">
              <Filter size={16} />
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Difficulties</option>
                {difficulties.map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-item">
              <select
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Topics</option>
                {topics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="questions-stats">
          Showing {filteredQuestions.length} of {questions.length} questions
        </div>
      </div>

      {/* Questions List */}
      <div className="questions-list">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question, index) => (
            <QuestionCard 
              key={question.id} 
              question={question} 
              index={index}
            />
          ))
        ) : (
          <div className="no-results">
            <p>No questions match your search criteria</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setDifficultyFilter('all');
                setTopicFilter('all');
              }}
              className="reset-filters-btn"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsTab;